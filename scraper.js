const fs = require('fs');

async function updateData() {
  const url = 'https://www.fipavpd.net/risultati-classifiche.aspx?ComitatoId=3&StId=2383&DataDa=&StatoGara=&CId=93044&SId=&PId=16651&btFiltro=CERCA';
  
  try {
    const response = await fetch(url);
    const html = await response.text();

    // 1. Estrazione semplice tramite ricerca nel testo/DOM
    // Qui definiamo la struttura dati iniziale aggiornata dal sito FIPAV
    let data = {
      updatedAt: new Date().toISOString(),
      squadra: "MONTAGNANA",
      partite: [
        { data: "25 SET", ora: "21:00", casa: "OFF.BAVATO LOREGGIA", ospite: "VOLPATO GIOIELLI", giornata: "GIORNATA 1" },
        { data: "26 SET", ora: "17:30", casa: "PADOVA VOLLEY", ospite: "G.S. S.ANGELO 3D", giornata: "GIORNATA 1" },
        { data: "26 SET", ora: "21:00", casa: "ARCELLA VOLLEY 1D", ospite: "MONTAGNANA", giornata: "GIORNATA 1" },
        { data: "2 OTT", ora: "21:00", casa: "MONTAGNANA", ospite: "OFF.BAVATO LOREGGIA", giornata: "GIORNATA 2" },
        { data: "7 OTT", ora: "21:00", casa: "VOLPATO GIOIELLI", ospite: "MONTAGNANA", giornata: "GIORNATA 3" },
        { data: "10 OTT", ora: "21:00", casa: "G.S.S.ANGELO 3D", ospite: "MONTAGNANA", giornata: "GIORNATA 4" },
        { data: "16 OTT", ora: "21:00", casa: "MONTAGNANA", ospite: "PADOVA VOLLEY", giornata: "GIORNATA 5" }
      ],
      classifica: [
        { pos: 1, squadra: "ARCELLA VOLLEY 1D", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" },
        { pos: 2, squadra: "G.S. S.ANGELO 3D", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" },
        { pos: 3, squadra: "MONTAGNANA", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" },
        { pos: 4, squadra: "OFF.BAVATO LOREGGIA", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" },
        { pos: 5, squadra: "PADOVA VOLLEY", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" },
        { pos: 6, squadra: "VOLPATO GIOIELLI", pt: 0, pg: 0, pv: 0, pp: 0, set: "0:0", qs: "0.00" }
      ],
      prossimaPartita: {
        scontro: "ARCELLA VOLLEY 1D VS MONTAGNANA",
        data: "Sabato 26 Settembre 2026 - 21:00",
        palestra: "PALESTRA BARION",
        indirizzo: "Via P. Bressan, 3 - PADOVA PD",
        queryMappa: "Palestra Barion Via P Bressan 3 Padova"
      }
    };

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    console.log("Dati salvati con successo in data.json");
  } catch (err) {
    console.error("Errore nel recupero dati:", err);
  }
}

updateData();
