export default function SocialMedias() {
  return (
    <React.Fragment>
      <div className="social-medias">
        <a
          aria-hidden="true"
          href="https://www.instagram.com/uottahack/"
          target="_blank"
          title="Follow us on Instagram"
          className="fab fa-instagram media-icon"
        />
        <a
          aria-hidden="true"
          href="https://twitter.com/uottahack"
          target="_blank"
          title="Follow us on Twitter"
          className="fab fa-twitter media-icon"
        />
        <a
          aria-hidden="true"
          href="https://www.facebook.com/uottahack/"
          target="_blank"
          title="Follow us on Facebook"
          className="fab fa-facebook-f media-icon"
        />
      </div>

      <style jsx>
        {`
          .social-medias {
            margin-top: 25px;
          }

          .media-icon {
            color: black;
            margin: 0 25px 0 25px;
            font-size: 1.25rem;
          }
        `}
      </style>
    </React.Fragment>
  );
}
