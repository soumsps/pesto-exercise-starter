// Primitive Types
function isString(data) {
  return typeof data === 'string' || data instanceof String;
}

function isNumber(data) {
  return typeof data === 'number' && isFinite(data);
}

function isNull(data) {
  return data === null;
}

function isUndefined(data) {
  return typeof data === 'undefined';
}

function isBoolean(data) {
  return typeof data === 'boolean' || data instanceof Boolean;
}

function isSymbol(data) {
  return typeof data === 'symbol';
}

// Composite Types
const { isArray } = Array;

function isObject(data) {
  return typeof data === 'object' || data instanceof Object;
}

const typeCheck = (data) => {
  let type = '';
  if (isString(data) || isNumber(data) || isSymbol(data) || isNull(data) || isUndefined(data) || isBoolean(data)) {
    type = 'primitive';
  } else if (isArray(data)) {
    type = 'array';
  } else if (isObject(data)) {
    type = 'object';
  }

  return type;
};


const deepCopyObject = objToCopy => {
  let copiedObject = 'Error!';
  const type = typeCheck(objToCopy);

  if (type === 'primitive') {
    copiedObject = objToCopy;
  } else if (type === 'array') {
    copiedObject = [];
    objToCopy.map((item) => copiedObject.push(deepCopyObject(item)));
  } else if (type === 'object') {
    copiedObject = {};
    for (const property of Object.keys(objToCopy)) {
      copiedObject[property] = deepCopyObject(objToCopy[property]);
    }
  }

  return copiedObject;
};

export { deepCopyObject };
