import styles, { layout } from "../style";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ¿Como acceder a los archivos de cada materia?
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Para ingresar al Drive con los archivos primero tienes 1 acortador.
        <br />
        - Tienen que omitir los anuncios.
        <br />
        - Si se te abre una pestaña debes cerrarla.
        <br />
        - Denegar y cancelar cualquier permiso.
        <br />
        <span className="text-white">(Es igual a todos los acordtadores)</span>
      </p>
    </div>
  </section>
);

export default Business;
