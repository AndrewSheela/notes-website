const notesData = [
  { note:"G",  trans:"En",  tamil:"என்",  chord:"G" },
  { note:"A",  trans:"Ava", tamil:"அவ", chord:"Am" },
  { note:"",   trans:"-",  tamil:"-",   chord:"" },

  { note:"Bb", trans:"Pa",  tamil:"பா",  chord:"Bb" },
  { note:"C",  trans:"tham",tamil:"தம்", chord:"C" }
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
