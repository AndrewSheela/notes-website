const notesData = [
  { note:"C",  trans:"Si",  tamil:"சி",  chord:"C" },
  { note:"D",  trans:"nga", tamil:"ங்க", chord:"Dm" },
  { note:"",   trans:"-",  tamil:"-",   chord:"" },

  { note:"E",  trans:"Ku",  tamil:"கு",  chord:"E" },
  { note:"F",  trans:"tti", tamil:"ட்டி", chord:"F" }
];

const container = document.getElementById("song-container");

notesData.forEach(item => {
  const span = document.createElement("span");
  span.style.margin = "6px";
  span.innerHTML = `
    <div style="text-align:center">
      <small>${item.note}</small><br>
      <b>${item.tamil}</b><br>
      <small>${item.chord}</small>
    </div>
  `;
  container.appendChild(span);
});
