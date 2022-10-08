document.getElementById("horayfecha").innerHTML = new Date().toLocaleDateString(
  Date.UTC,
  { weekday: "long", year: "numeric", month: "short", day: "numeric" }
);

const frm = document.querySelector("#frm");

frm.addEventListener("submit", (event) => {
  event.preventDefault();

  const frm = event.target;

  let fecha = new Date().toLocaleDateString(Date.UTC, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let vta = Number(frm.vtam.value);
  let vtp = Number(frm.vtpm.value);

  let glovoam = Number(frm.glovoam.value);
  let uberam = Number(frm.uberam.uberam.value);

  let glovopm = Number(frm.glovopm.value);
  let uberpm = Number(frm.uberpm.value);

  const formData = {
    date: fecha,
    phone: "+34644696599",
    ppam: frm.ppam.value,
    vtam: frm.vtam.value,
    pppm: frm.pppm.value,
    vtpm: frm.vtpm.value,
    deliveryam: frm.deliveryam.value,
    deliverypm: frm.deliverypm.value,
    clientesam: frm.clientesam.value,
    clientespm: frm.clientespm.value,
    tqmedioam: frm.tqmedioam.value,
    tqmediopm: frm.tqmediopm.value,
  /*   glovoam: frm.glovoam.value,
    uberam: frm.uberam.uberam.value,
    glovopm: frm.glovopm.value,
    uberpm: frm.uberam.uberpm.value,
    deliveryam: frm.deliveryam.value,
    deliverypm: frm.deliverypm.value, */
    clientesam: frm.clientesam.value,
    clientespm: frm.clientespm.value,
    tqmedioam: frm.tqmedioam.value,
    tqmediopm: frm.tqmediopm.value,
    comentario: frm.comentario.value
  };

  

  const URL = `https://api.whatsapp.com/send?phone=${formData.phone}&text=Fecha: ${formData.date} %0A%0APresupuesto AM: ${formData.ppam} %0AVenta AM: ${formData.vtam} %0APresupuesto PM: ${formData.pppm} %0AVenta PM: ${formData.vtpm} %0ADelivery AM: ${glovoam + uberam} %0ADelivery PM: ${glovopm + uberpm} %0AClientes AM: ${formData.clientesam} %0AClientes PM: ${formData.clientespm} %0ATQ Medio AM: ${formData.tqmedioam} %0ATQ Medio PM: ${formData.tqmediopm} %0AVenta Total: ${vta + vtp} %0A%0AInforme: %0A%0A${formData.comentario} &data=`;
  window.open(URL, "_blank");
  frm.reset();
});
