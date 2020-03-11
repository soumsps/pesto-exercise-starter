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
  return typeof data === 'boolean';
}

function isSymbol(data) {
  return typeof data === 'symbol';
}

function isPrimitive(data) {
  return isString(data) || isNumber(data) || isSymbol(data) || isNull(data) || isUndefined(data) || isBoolean(data);
}


const { isArray } = Array;

function isObject(data) {
  return typeof data === 'object' || data.constructor === Object;
}


const deepCopyObject = objToCopy => {
  let copiedObject = 'Error!';

  if (isPrimitive(objToCopy)) {
    copiedObject = objToCopy;
  } else if (isArray(objToCopy)) {
    copiedObject = [];
    objToCopy.map((item) => copiedObject.push(deepCopyObject(item)));
  } else if (isObject(objToCopy)) {
    copiedObject = {};
    for (const property of Object.keys(objToCopy)) {
      copiedObject[property] = deepCopyObject(objToCopy[property]);
    }
  }

  return copiedObject;
};

export { deepCopyObject };
