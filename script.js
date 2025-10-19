// Malla Derecho PUCV – desde 5° a 10° semestre

const datos = {
  "s5": [
    ["DER1050", "Bases del Derecho Administrativo", []],
    ["DER1052", "Derecho y Orden Económico", []],
    ["DER1053", "Obligaciones y Contratos", []],
    ["DER1051", "Derecho Individual del Trabajo", []],
    ["DER1055", "Responsabilidad Penal", []],
    ["DER1057", "Juicio Declarativo y Prueba", []],
    ["DER1056", "Taller de Memoria 3", []]
  ],
  "s6": [
    ["DER1060", "Actuación de la Administración del Estado", ["DER1050"]],
    ["DER1062", "Regulación Económica y Libre Competencia", ["DER1052"]],
    ["DER1063", "Responsabilidad Civil", ["DER1053"]],
    ["DER1061", "Derecho Colectivo del Trabajo", ["DER1051"]],
    ["DER1065", "Delitos contra Intereses Individuales", ["DER1055"]],
    ["DER1064", "Recursos Procesales", ["DER1057"]],
    ["DER1066", "Clínica: Negociación y Resolución de Conflictos", []]
  ],
  "s7": [
    ["DER1070", "Control y Responsabilidad de la Administración del Estado", ["DER1060", "DER1063"]],
    ["DER1072", "Derecho de los Mercados Financieros", ["DER1062"]],
    ["DER1073", "Contratos en Particular", ["DER1063"]],
    ["DER1071", "Introducción al Derecho Comercial", []],
    ["DER1077", "Ejecución y Tutela Cautelar", ["DER1064"]],
    ["DER1076", "Taller de Memoria 4", ["DER1056"]]
  ],
  "s8": [
    ["DER1082", "Teoría del Ordenamiento Jurídico", []],
    ["DER1083", "Familia", ["DER1073"]],
    ["DER1081", "Sociedades de Capital", ["DER1071"]],
    ["DER1080", "Derecho Tributario", ["DER1071"]],
    ["DER1085", "Derecho Procesal Penal", ["DER1065","DER1064"]],
    ["DER1084", "Enseñanza clínica del derecho: Litigación Oral", ["DER1057"]]
  ],
  "s9": [
    ["DER1092", "Filosofía del Derecho", ["DER1082"]],
    ["DER1093", "Sucesiones", ["DER1083"]],
    ["DER1091", "Derecho Concursal", ["DER1081"]],
    ["DER1094", "Ética Profesional", []],
    ["DER1095", "Memoria", ["DER1076"]],
    ["DER1090", "Pasantía Profesional", []]
  ],
  "s10": [
    ["DER1100", "Licenciatura", []]
  ]
};
// estados: pendiente | cursando | aprobado
const ramos = [];
for (const s in datos) for (const [codigo, nombre, prerequisitos] of datos[s]) {
  ramos.push({ codigo, nombre, prerequisitos, estado: "pendiente" });
}

const malla = document.getElementById("malla");
const orden = ["s5","s6","s7","s8","s9","s10"];

function requisitosOk(prs) {
  return prs.every(pr => {
    const req = ramos.find(r => r.codigo === pr);
    return req && req.estado === "aprobado";
  });
}

function cicloEstado(ramo) {
  if (ramo.estado === "pendiente") ramo.estado = "cursando";
  else if (ramo.estado === "cursando") ramo.estado = "aprobado";
  else ramo.estado = "pendiente";
}

function renderMalla() {
  malla.innerHTML = "";

  for (const semestre of orden) {
    if (!datos[semestre]) continue;

    const cont = document.createElement("div");
    cont.className = "semestre";
    cont.innerHTML = `<h3>${semestre.replace("s","")}° Semestre</h3>`;

    datos[semestre].forEach(([codigo, nombre, prerequisitos]) => {
      const ramo = ramos.find(r => r.codigo === codigo);

      const div = document.createElement("div");
      div.className = "ramo";
      div.innerHTML = `<strong>${codigo}</strong><br>${nombre}`;

      // estado visual
      if (ramo.estado === "aprobado") div.classList.add("aprobado");
      if (ramo.estado === "cursando") div.classList.add("cursando");

      // habilitación por requisitos
      const habil = requisitosOk(prerequisitos) || prerequisitos.length === 0;
      if (habil) div.classList.add("activo");

      // doble clic (desktop) + doble tap (móvil)
      const activar = (e) => {
        if (!habil) { alert(`No puedes cursar ${codigo}. Requiere: ${prerequisitos.join(", ")}`); return; }
        cicloEstado(ramo);
        renderMalla();
      };

      // desktop: dblclick
      div.addEventListener('dblclick', (e) => { e.preventDefault(); activar(e); });

      // móvil: doble tap manual
      let lastTap = 0;
      div.addEventListener('click', (e) => {
        const now = Date.now();
        if (now - lastTap < 300) { // segundo tap en <300ms
          e.preventDefault();
          activar(e);
        }
        lastTap = now;
      }, { passive: true });

      cont.appendChild(div);
    });

    malla.appendChild(cont);
  }
}

renderMalla();
