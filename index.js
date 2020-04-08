const input = document.querySelector('input[name="image"]')
const results = document.getElementById('results')

input.addEventListener('change', function (e) {
  /** @type HTMLInputElement */
  const target = e.target

  results.innerHTML = ''

  for (let i = 0; i < target.files.length; i++) {
    const file = target.files[i]

    var fileReader = new FileReader();
    fileReader.onload = (event) => {
      const arrayBuffer = event.target.result

      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      textarea.value = JSON.stringify(EXIF.readFromBinaryFile(arrayBuffer))

      results.appendChild(textarea)
    };
    fileReader.readAsArrayBuffer(file)
  }
})

