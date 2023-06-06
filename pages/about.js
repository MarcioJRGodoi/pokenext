import Image from "next/image";

import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p></p>
      <Image
        src="/images/images.jpeg"
        width={300}
        height={300}
        alt="Charizanrd"
      />
    </div>
  );
};

export default about;
