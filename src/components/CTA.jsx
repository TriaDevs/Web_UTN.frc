import styles from "../style";
import Button from "./Button";
import { algebra } from "../constants";

const CTA = () => (
  <div>
    <h2 className={styles.heading2}>Algebra</h2>
    <div className="bg-black-gradient-2 rounded-[20px] box-shadow">
      <section
        className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex flex-col`}
      >
        <div className="flex-1 flex flex-col">
          <p className={`${styles.paragraph} max-w-[470px]`}>
            <span className="text-cyan-400 text-[25px]">Documentos</span>
          </p>
          {algebra.book.map((book) => (
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              <Button link={book.link} title={book.id}/> 
            </p>
          ))}
          <br />
          <p className={`${styles.paragraph} max-w-[470px]`}>
            <span className="text-cyan-400 text-[25px]">Parciales</span>
          </p>
          {algebra.exams.map((exams) => (
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              <Button link={exams.link}  title={exams.id} /> 
            </p>
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <p className={`${styles.paragraph} max-w-[470px]`}>
            <span className="text-cyan-400 text-[25px]">Unidades</span>
          </p>
          {algebra.units.map((units) => (
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              <Button link={units.link}  title={units.id} /> 
            </p>
          ))}
        </div>
      </section>
      <section
        className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex flex-col`}
      >
        <div className="flex-1 flex flex-col">
          <p className={`${styles.paragraph} max-w-[470px]`}>
            <span className="text-cyan-400 text-[25px]">Links de ayuda</span>
          </p>
          {algebra.links.map((links) => (
            <p className={`${styles.paragraph} mt-5`}>
              <Button link={links.link}  title={links.id} /> 
            </p>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default CTA;
