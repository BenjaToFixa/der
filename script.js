// Malla interactiva de Derecho

const datos = {
  "s1": [
    ["Derecho Constitucional I: Historia del Pensamiento Político y Teoría del Estado", "DER1152", 3, 3, "DER", [], ""],
    ["Derecho Romano I: Derecho Público Romano, Fuentes del Derecho y Proceso", "DER1153", 3, 3, "DER", [], ""],
    ["Historia del Derecho I: Historia del Derecho Antiguo y Medieval", "DER1154", 2, 2, "DER", [], ""],
    ["Introducción al Derecho I: Fuentes del Ordenamiento Jurídico y Sujetos de Derecho", "DER1156", 3, 3, "DER", [], ""],
    ["Teoría del Derecho I: El Derecho como Fenómeno Social", "DER1158", 3, 3, "DER", [], ""],
    ["Estrategias de Comprensión de Discurso Escrito", "DER1157", 2, 2, "DER", [], ""]
  ],
  "s2": [
    ["Derecho Constitucional II: Teoría Constitucional e Historia Política y Constitucional de Chile", "DER1162", 3, 3, "DER", ["DER1152"], ""],
    ["Derecho Romano II: Derecho Romano de Bienes y Obligaciones", "DER1163", 3, 3, "DER", ["DER1153"], ""],
    ["Historia del Derecho II: Historia del Derecho Moderno y Contemporáneo", "DER1164", 2, 2, "DER", ["DER1154"], ""],
    ["Introducción al Derecho II: La Judicatura", "DER1169", 3, 3, "DER", ["DER1156"], ""],
    ["Teoría del Derecho II: Teoría de la Norma Jurídica y el Ordenamiento Jurídico", "DER1168", 3, 3, "DER", ["DER1158"], ""],
    ["Estrategias de Producción de Discurso Oral", "DER1167", 2, 2, "DER", ["DER1157"], ""]
  ],
  "s3": [
    ["Derecho Constitucional III: Derecho Orgánico", "DER1252", 3, 3, "DER", ["DER1162"], ""],
    ["Derecho Internacional Público I: Fundamentos y Fuentes del Derecho Internacional Público", "DER1253", 3, 3, "DER", ["DER1152","DER1162"], ""],
    ["Derecho Económico I: Fundamentos de Economía y Sistemas Económicos", "DER1254", 3, 3, "DER", ["DER1164"], ""],
    ["Derecho Civil I: Acto Jurídico y Contratos en General", "DER1255", 3, 3, "DER", ["DER1153"], ""],
    ["Derecho Procesal Civil I: Teoría General del Proceso", "DER1256", 3, 3, "DER", ["DER1169"], ""],
    ["Derecho Penal I: Potestad Penal y Teoría del Delito", "DER1257", 3, 3, "DER", ["DER1164"], ""],
    ["Estrategias de Producción de Discurso Escrito", "DER1258", 2, 2, "DER", ["DER1157","DER1167"], ""]
  ],
  "s4": [
    ["Derecho Constitucional IV: Derechos Fundamentales", "DER1262", 3, 3, "DER", ["DER1252"], ""],
    ["Derecho Internacional Público II: Sujetos de Derecho Internacional Público", "DER1263", 3, 3, "DER", ["DER1253"], ""],
    ["Derecho Económico II: Derecho del Mercado", "DER1264", 3, 3, "DER", ["DER1254"], ""],
    ["Derecho Civil II: Derechos Reales", "DER1265", 3, 3, "DER", ["DER1255"], ""],
    ["Derecho Procesal Civil II: Actos Jurídicos Procesales, Actuaciones Procesales y Procedimientos Incidentales", "DER1266", 3, 3, "DER", ["DER1256"], ""],
    ["Derecho Penal II: Responsabilidad Penal", "DER1267", 3, 3, "DER", ["DER1257"], ""],
    ["Estrategias de Argumentación", "DER1269", 2, 2, "DER", ["DER1269"], ""]
  ],
  "s5": [
    ["Derecho Administrativo 1: Bases del Derecho Administrativo", "DER1331", 3, 3, "DER", ["DER1262"], ""],
    ["Derecho del Trabajo 1: Derecho Individual del Trabajo", "DER1332", 3, 3, "DER", ["DER1267"], ""],
    ["Derecho Económico 3: Derecho de los Mercados Financieros", "DER1333", 3, 3, "DER", ["DER1264"], ""],
    ["Derecho Civil 3: Teoría General de las Obligaciones", "DER1334", 3, 3, "DER", ["DER1265"], ""],
    ["Derecho Procesal Civil 2: Procedimientos Declarativo Ordinario", "DER1335", 3, 3, "DER", ["DER1266"], ""],
    ["Derecho Penal 3: Delitos Contra los Intereses Individuales", "DER1336", 3, 3, "DER", ["DER1267"], ""],
    ["Habilidades Profesionales", "DER1337", 3, 3, "DER", [], ""]
  ],
  "s6": [
    ["Derecho Administrativo 2: Actuación de la Administración del Estado", "DER1371", 3, 3, "DER", ["DER1331"], ""],
    ["Derecho del Trabajo 2: Derecho Colectivo del Trabajo", "DER1372", 3, 3, "DER", ["DER1332"], ""],
    ["Derecho Civil 4: Responsabilidad Civil Contractual y Extracontractual", "DER1373", 3, 3, "DER", ["DER1334"], ""],
    ["Derecho Procesal Civil 4: Proceso Sumario y Recursos Procesales", "DER1374", 3, 3, "DER", ["DER1335"], ""],
    ["Litigación", "DER1375", 2, 2, "DER", ["DER1337"], ""],
    ["Interpretación Jurídica", "DER1376", 2, 2, "DER", [], ""],
    ["Negociación", "DER1377", 2, 2, "DER", [], ""]
  ],
  "s7": [
    ["Derecho Administrativo 3: Control y Responsabilidad de la Administración del Estado", "DER1421", 3, 3, "DER", ["DER1371"], ""],
    ["Derecho Comercial 1: Sujetos de la Actividad Mercantil", "DER1422", 3, 3, "DER", ["DER1373"], ""],
    ["Filosofía del Derecho 1: El Concepto de Derecho en el Pensamiento Filosófico Jurídico", "DER1427", 2, 2, "DER", [], ""],
    ["Derecho Civil 5: Contratos en Particular", "DER1424", 3, 3, "DER", ["DER1334"], ""],
    ["Derecho Procesal Civil 5: Ejecución y Tutela Cautelar", "DER1425", 3, 3, "DER", ["DER1335"], ""],
    ["Derecho Procesal Penal 1: Fundamentos de Derecho Procesal", "DER1426", 3, 3, "DER", ["DER1266"], ""]
  ],
  "s8": [
    ["Derecho Tributario", "DER1450", 3, 3, "DER", ["DER1333"], ""],
    ["Derecho Comercial 2: Derecho de los Títulos de Crédito", "DER1451", 3, 3, "DER", ["DER1422"], ""],
    ["Filosofía del Derecho 2: Problemas Básicos de Filosofía Jurídica", "DER1455", 2, 2, "DER", ["DER1427"], ""],
    ["Derecho Civil 6: Derecho de Familia", "DER1452", 3, 3, "DER", ["DER1424"], ""],
    ["Derecho Procesal Penal 2: Procedimientos Penales y Recursos", "DER1454", 3, 3, "DER", ["DER1426"], ""],
    ["Metodología de la Investigación", "DER1453", 2, 2, "DER", [], ""]
  ],
  "s9": [
    ["Derecho de Seguros e Insolvencia", "DER1510", 3, 3, "DER", [], ""],
    ["Derecho Internacional Privado", "DER1511", 2, 2, "DER", [], ""],
    ["Derecho Sucesorio", "DER1512", 3, 3, "DER", [], ""],
    ["Pasantía Profesional", "DER1513", 2, 2, "DER", [], ""],
    ["Memoria", "DER1514", 12, 12, "DER", [], ""],
    ["Ética Profesional: 110 Cred. Oblig.", "DER1515", 2, 2, "DER", [], ""]
  ],
  "s10": [
    ["Integración de Derecho Público: Autorización Jefe Docencia", "DER1520", 5, 5, "DER", [], ""],
    ["Integración de Derecho Procesal: Autorización Jefe Docencia", "DER1521", 5, 5, "DER", [], ""],
    ["Integración de Derecho Civil", "DER1522", 5, 5, "DER", [], ""]
  ]
};

const ramos = [];
for (const semestre in datos) {
  for (const ramo of datos[semestre]) {
    const [nombre, codigo, credSCT, credUSM, sigla, prerequisitos] = ramo;
    ramos.push({ nombre, codigo, credUSM, sigla, prerequisitos, aprobado: false });
  }
}

const malla = document.getElementById("malla");

function renderMalla() {
  malla.innerHTML = "";

  // Agrupar por semestre
  for (const semestre in datos) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.innerHTML = `<h3>${semestre.replace("s", "")}° Semestre</h3>`;

    datos[semestre].forEach((ramoData) => {
      const [nombre, codigo, , credUSM, , prerequisitos] = ramoData;
      const ramo = ramos.find(r => r.codigo === codigo);

      const div = document.createElement("div");
      div.className = "ramo";
      if (ramo.aprobado) div.classList.add("aprobado");
      if (prerequisitos.every(pr => {
        const req = ramos.find(r => r.codigo === pr);
        return req && req.aprobado;
      })) {
        div.classList.add("activo");
        div.onclick = () => {
          ramo.aprobado = !ramo.aprobado;
          renderMalla();
        };
      }

      div.innerHTML = `<strong>${codigo}</strong><br/>${nombre}<br/><small>${credUSM} créditos</small>`;
      contenedor.appendChild(div);
    });

    malla.appendChild(contenedor);
  }
}


renderMalla();
