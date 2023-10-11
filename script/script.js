/**
 * 
 * @author Laura López Alonso
 * GitHub: 
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
  //Hasta que no cargue la página en su totalidad(HTML, CSS· y JS), no se mostraá la página.
  const calculate = document.getElementById("calculate");
  const result = document.getElementById("result");

  calculate.addEventListener("click", () => {
    //Si le damos click al boton con id calculate, se realizará la siguiente acción:
    const length = parseFloat(document.getElementById("length").value); //Pasamos a número decimal el valor introducido en el input
    const width = parseFloat(document.getElementById("width").value);

    if (!isNaN(length && width)) {
      //Si es distinto a 'No es un número' en el valor length y width, realiza las operaciones
      
      const area = length * width;
      const perimetrer = 2 * (length + width);
      const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)); //Calculamos la diagonal. Uso Math.sqrt() para hacer raices cuadradas y Math.pow() para elevar un número

      //Mostramos los resultados usando .innerHTML, ya que esta función permite crear etiquetas en el código.
      result.innerHTML =       `<p class="text">Área del rectángulo : ${area.toFixed(2)}</p> 
                                <p class="text">Perímetro del rectángulo: ${perimetrer.toFixed(2)}</p>
                                <p class="text">Diagonal del rectángulo: ${diagonal.toFixed(2)}</p>`;
                                 //.toFixed para redondear los decimales
                                //${}Introduce los valores de las constantes
    } else {
      //En caso de error, se mostrará el siguiente mensaje
      result.textContent = `Ingrese valores válidos`;
    }
  });
});