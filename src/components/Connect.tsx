import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ConnectWithMe = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="glass-card text-center">
        <h3 className="mb-4 fw-bold mt-3">CONNECT WITH ME</h3>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.facebook.com/lloydryan.largo.7"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light social-link"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lloyd-ryan-largo-295683356/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light social-link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/lloydryan"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light social-link"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="mailto:largolloydryan0@gmail.com"
            className="btn btn-light social-link"
          >
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
