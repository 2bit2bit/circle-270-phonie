function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');

  // const header = document.querySelector('h2');
  // if(header) {
  //   header.textContent = 'make some magic here!!';
  // }

  const input = document.querySelectorAll('input')
  const inputContainer = document.querySelectorAll('.input-container')[1]

  const changeLogo = (network) => {
    console.log(network)
    return './img/' + network + '.png'
  }

  const showError = (message) => {
    const images = document.querySelector('.network-logo'),
      error = document.querySelector('.error');
    error.classList.remove('hidden');
    images.src = changeLogo('unknown')
    error.innerText = message;
  }

  const changeProvider = (number) => {
    const prefixes = {
      "mtn": ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913'],
      "9mobile": ['0809', '0817', '0818', '0908', '0909'],
      "airtel": ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901', '0912'],
      "glo": ['0705', '0805', '0807', '0811', '0815', '0905']
    },
      networks = ['mtn', 'glo', '9mobile', 'airtel'],
      found = [],
      images = document.querySelector('.network-logo'),
      error = document.querySelector('.error');
    for (let n of networks) {

      if (prefixes[n].includes(number)) {
        error.classList.add('hidden');
        images.src = changeLogo(n)
      } else {
        found.push(false)
      }
    }
    // console.log(found)
    if (found.length === 4) {
      showError('Network Not found')
      inputContainer.classList.add('tel-container')
    }

  }

  input.forEach(i => {
    i.addEventListener('input', (e) => {
      const number = i.value,
        value = number.replaceAll(" ", "");
      console.log(value)
      if (value.startsWith("0")) {
        inputContainer.classList.remove('tel-container')
        if (value.length === 4) {
          changeProvider(value)
        }
      } else if (value.startsWith("2") || value.startsWith("+")) {
        inputContainer.classList.remove('tel-container')
        let n;
        if (value.startsWith("+")) { n = value.slice(1) } else {
          n = value

        }

        if (n.length === 6) {
          changeProvider('0' + n.slice(3))
        }
      } else {
        showError(value[0] + ' is an invalid digit');
        inputContainer.classList.add('tel-container')
      }
    })
  })

  // function oc() {
  //   input.forEach(i => console.log(i.value()))
  // }

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //