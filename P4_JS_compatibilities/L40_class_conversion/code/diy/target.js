var _A;
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
class A {
  constructor(b = 2) {
    _defineProperty(this, "prop1", 1);
    _defineProperty(this, "method2", (...args) => {
      console.log(args);
    });
    this.prop2 = b;
  }
  method1() {
    console.log("method1");
  }
  static method3() {
    console.log("method3", this);
  }
}
_A = A;
_defineProperty(A, "method4", () => {
  console.log("method4", _A);
});