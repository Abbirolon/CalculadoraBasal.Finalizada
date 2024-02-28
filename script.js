const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const DETALLE = document.getElementById("detalle");

CALCULAR.addEventListener("click", () => {
    const DATO = parseFloat(document.getElementById("peso").value);
    console.log("dato ingresado:", DATO);

    if (!isNaN(DATO) && DATO > 0) {
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + "cc/hr";
        MAN.innerHTML = "m+m/2 : 105cc/h" + mantenimiento + "cc/hr";
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

/**
 * Calcula el flujo según el peso proporcionado.
 * param {number} peso - El peso para calcular el flujo.
 * return {number} - El flujo calculado.
 */
function calcFlujo(peso){
    if (peso > 20) {
        return ((peso - 20) * 20) + 1500;
    } else if (peso > 10) {
        return ((peso - 10) * 50) + 1000;
    } else {
        return ((peso - 10) * 100);
    }
}