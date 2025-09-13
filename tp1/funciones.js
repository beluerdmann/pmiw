// Alternar color

function esPar(f, c) {
  return (f+c)%2===0;
}

// Dibujar grilla

function grilla (cant, tam, colorN) {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      if (esPar(i, j)) {
        fill(colorN);
      } else {
        fill(255);
      }
      rect (width/2 + i*tam, j*tam, tam, tam);
    }
  }
}

// Cruz centro

function cruz(cant, tam, tamCir, colorN) {

  // Línea izquierda
  for (let i=0; i<cant; i++) {
    if (i%2===0) {
      fill(255);
    } else {
      fill(colorN);
    }
    ellipse(i*tam + width/2 + tam-tam/5, tam*4 + tam/5, tamCir, tamCir);
    ellipse(i*tam + width/2 + tam-tam/5, tam*5 - tam/5, tamCir, tamCir);
  }

  // Línea derecha

  for (let i=0; i<cant; i++) {
    if (i%2===0) {
      fill(colorN);
    } else {
      fill(255);
    }
    ellipse(i*tam + width/2 + tam*5 + tam/5, tam*4 + tam/5, tamCir, tamCir);
    ellipse(i*tam + width/2 + tam*5 + tam/5, tam*5 - tam/5, tamCir, tamCir);
  }

  // Línea superior

  for (let i=5; i>cant && i<6; i++) {
    for (let j=0; j<cant+1; j++) {
      if ((i+j)%2===0) {
        fill(255);
      } else {
        fill(colorN);
      }
      ellipse(i*tam + width/2 - tam/5, j*tam - tam/5, tamCir, tamCir);
      ellipse(i*tam + width/2 - tam + tam/5, j*tam - tam/5, tamCir, tamCir);
    }
  }

  // Línea inferior

  for (let i=5; i>cant && i<6; i++) {
    for (let j=6; j>cant && j<10; j++) {
      if ((i+j)%2===0) {
        fill(255);
      } else {
        fill(colorN);
      }
      ellipse(i*tam + width/2 - tam/5, j*tam - tam + tam/5, tamCir, tamCir);
      ellipse(i*tam + width/2 - tam + tam/5, j*tam - tam + tam/5, tamCir, tamCir);
    }
  }
}

function cuadrante1(cant, tam, tamCir, colorN) {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      if ((i+j)%2===0) {
        fill(255);
      } else {
        fill(colorN);
      }
      ellipse(i*tam + width/2 + tam - tam/5, j*tam + tam/5, tamCir, tamCir);
      ellipse(i*tam + width/2 + tam/5, j*tam + tam - tam/5, tamCir, tamCir);
    }
  }
}

function cuadrante2(cant, tam, tamCir, colorN) {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      if ((i+j)%2===0) {
        fill(colorN);
      } else {
        fill(255);
      }
      ellipse(i*tam + width/2 + tam*5 + tam/5, j*tam + tam/5, tamCir, tamCir);
      ellipse(i*tam + width/2 + tam*6 - tam/5, j*tam + tam - tam/5, tamCir, tamCir);
    }
  }
}
