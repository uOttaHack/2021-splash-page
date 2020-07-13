import FontAwesome from "react-fontawesome";

export default function SocialMedias() {
  return (
    <React.Fragment>
      <div className="social-medias">
        <a
          aria-hidden="true"
          href="https://www.instagram.com/uottahack/"
          target="_blank"
          className="media-icon"
        >
          <FontAwesome name="instagram" />
        </a>
        <a
          aria-hidden="true"
          href="https://twitter.com/uottahack"
          target="_blank"
          className="media-icon"
        >
          <FontAwesome name="twitter" />
        </a>
        <a
          aria-hidden="true"
          href="https://www.facebook.com/uottahack/"
          target="_blank"
          className="media-icon"
        >
          <FontAwesome name="facebook" />
        </a>
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

          @media only screen and (max-width: 1000px) {
            .social-medias {
              margin-top: 12.5px;
            }

            .media-icon {
              margin: 0 25px 0 25px;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
