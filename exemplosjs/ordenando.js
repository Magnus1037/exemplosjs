const algoritimoEle = document.getElementById('algoritimo')
const valoresEle = document.getElementById('valores')
document.getElementById('adicionar').addEventListener('click', add)
document.getElementById('ordenar').addEventListener('click', ordenar)
document.getElementById('misturar').addEventListener('click', misturar)

const algoritimoLista = {
  swap: (array) => {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          // faz a troca de elementos adjacentes
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    }
    return array;
  },
  shuffle: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
  bubble_sort: (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // faz a troca de elementos adjacentes
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  },
  selection_sort: (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array;
  },
  quick_sort: (array, left = 0, right = array.length - 1) => {
    if (left >= right) {
      return;
    }
    const pivot = array[Math.floor((left + right) / 2)];
    const index = algoritimoLista.partition(array, left, right, pivot);
    algoritimoLista.quick_sort(array, left, index - 1);
    algoritimoLista.quick_sort(array, index, right);
    return array;
  },
  partition: (array, start, end, pivot) => {
    let left = start;
    let right = end;

    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        // troca de posição dos elementos
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }

    return left;
  },
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
}
function add() {
  const listaEl = document.getElementById('lista')
  const valor = document.getElementById('valor').value;
  const node = document.createElement('li')
  node.innerHTML = valor.toString()
  listaEl.appendChild(node)
}
function ordenar() {
  const listaEl = document.getElementById('lista')

  var array = Array.from(listaEl.children).map(m => parseInt(m.innerHTML))

  if (!algoritimoEle.value) return;
  const algoritimo = algoritimoLista[algoritimoEle.value]
  if (!algoritimo) return;

  algoritimo(array)

  console.log(array)
  array.map((value, index) => {
    listaEl.children[index].innerHTML = value.toString()
  })
}

function misturar() {
  const listaEl = document.getElementById('lista')
  var array = Array.from(listaEl.children).map(m => parseInt(m.innerHTML))
  
  array = algoritimoLista.shuffle(array);
  array.map((value, index) => {
    listaEl.children[index].innerHTML = value.toString()
  })
}

misturar()