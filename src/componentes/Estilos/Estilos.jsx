import styles from "./estilos.module.css";

export const Estilos = () => {
  let nombre = "By Luchi Angel";
  let subTitle = "Catering para todo tipo de eventos";

  return (
    <>
      <h1 className={styles.title}>Todo dulce y Una pizca de sal </h1>
      {/* Css module con boostrap combinados */}
      <h2 className={`fs-4 ${styles.subTitle}`}>{subTitle}</h2>
      <p className="text-primary fs-3"> {nombre}</p>
  
    </>
  );
};
