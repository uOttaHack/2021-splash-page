const firebase = require("@firebase/testing");
const fs = require("fs");
const { setup, teardown } = require("./firestore.utils");

describe("Safety rules", () => {
  const projectId = `rules-spec-${Date.now()}`;
  const rules = fs.readFileSync(".firebase/firestore.rules", "utf8");
  let collection;

  beforeAll(async () => {
    const db = await setup(projectId, rules);
    collection = db.collection("emails");
  });

  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId });
  });

  afterAll(teardown);

  it("Allows only creation of emails (blocks updating with duplicate)", async () => {
    const invalidEmails = [
      "a",
      "a@a.a",
      "test%@test.com",
      "test@test.c_a",
      "test+@test.com",
    ];
    const validEmails = [
      "test@test.com",
      "a@a.b.cd",
      "test_ing-email@domain-with_under.dot.four",
    ];
    const docValue = {
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await Promise.all(
      invalidEmails.map((email) =>
        expect(collection.doc(email).set(docValue)).toDeny()
      )
    );

    await Promise.all(
      validEmails.map((email) =>
        expect(collection.doc(email).set(docValue)).toAllow()
      )
    );

    await Promise.all(
      validEmails.map((email) =>
        expect(collection.doc(email).delete()).toDeny()
      )
    );

    await Promise.all(
      validEmails.map((email) =>
        expect(collection.doc(email).set(docValue)).toDeny()
      )
    );

    await Promise.all(
      validEmails.map((email) =>
        expect(collection.doc(email).set(docValue, { merge: true })).toDeny()
      )
    );

    await Promise.all(
      validEmails.map((email) =>
        expect(collection.doc(email).update(docValue)).toDeny()
      )
    );

    await Promise.all(
      [...invalidEmails, ...validEmails].map((email) =>
        expect(collection.doc(email).get()).toDeny()
      )
    );
  });
});
