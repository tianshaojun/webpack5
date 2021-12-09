/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/_regenerator-runtime@0.13.9@regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function getString() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello world!!!');
    }, 2000);
  });
}

function helloWorld() {
  return _helloWorld.apply(this, arguments);
}

function _helloWorld() {
  _helloWorld = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var string;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getString();

          case 2:
            string = _context.sent;
            console.log(string);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloWorld.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);

/***/ }),

/***/ "./src/assets/data.csv":
/*!*****************************!*\
  !*** ./src/assets/data.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["to","from","heading","body Mary","John","Reminder","Call Cindy on Tuesday Zoe","Bill","Reminder","Buy orange juice Autumn","Lindsey","Letter","I miss you "],[""]]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/_regenerator-runtime@0.13.9@regenerator-runtime/runtime.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/_regenerator-runtime@0.13.9@regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/assets/data.xml":
/*!*****************************!*\
  !*** ./src/assets/data.xml ***!
  \*****************************/
/***/ ((module) => {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/assets/1.svg":
/*!**************************!*\
  !*** ./src/assets/1.svg ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAgMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCPot6/lvoQtMzhfMl8pO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTp1cmwoI+i3r+W+hC0zOF8zXyk7c3Ryb2tlLXdpZHRoOjAuNjt9Cgkuc3Qye29wYWNpdHk6MC41O2ZpbGw6dXJsKCPot6/lvoQtMzlfMl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0M3tvcGFjaXR5OjAuNTtmaWxsOnVybCgj6Lev5b6ELTM5XzNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Q1e2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNTVkdJRF8yXyk7c3Ryb2tlLXdpZHRoOjAuMjt9Cgkuc3Q2e2ZpbGw6dXJsKCPmpK3lnIblvaLlpIfku71fMV8pO30KCS5zdDd7ZmlsbDp1cmwoI+akreWchuW9ouWkh+S7vS0yXzFfKTt9Cgkuc3Q4e2ZpbGw6dXJsKCPot6/lvoQtNDBfOF8pO30KCS5zdDl7b3BhY2l0eTowLjE7ZmlsbDp1cmwoI+i3r+W+hF8yXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QxMHtmaWxsOnVybCgj6Lev5b6ELTQwXzlfKTt9Cgkuc3QxMXtmaWxsOnVybCgj6Lev5b6ELTQwXzEwXyk7fQoJLnN0MTJ7ZmlsbDp1cmwoI+i3r+W+hC00MF8xMV8pO30KCS5zdDEze2ZpbGw6dXJsKCPot6/lvoQtNDBfMTJfKTt9Cgkuc3QxNHtvcGFjaXR5OjAuMTtmaWxsOnVybCgj6Lev5b6EXzNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDE1e2ZpbGw6dXJsKCPot6/lvoQtNDBfMTNfKTt9Cgkuc3QxNntmaWxsOnVybCgj6Lev5b6ELTQwXzE0Xyk7fQoJLnN0MTd7ZmlsbDp1cmwoI+i3r+W+hC00MF8xNV8pO30KPC9zdHlsZT4KPHRpdGxlPue8lue7hCA55aSH5Lu9PC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSLnn6nlvaLlpIfku70tMTEiPgo8L2c+CjxsaW5lYXJHcmFkaWVudCBpZD0i6Lev5b6ELTM4XzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0yNzguMTY3NCIgeTE9IjM3OC40NjIyIiB4Mj0iLTI3Ny43NzU2IiB5Mj0iMzc4LjEzMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxOCAwIDAgLTEzLjIgNTAxNiA1MDAxLjYwMDEpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwOEMzQkQiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzODcxRkUiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggaWQ9Iui3r+W+hC0zOCIgY2xhc3M9InN0MCIgZD0iTTEsMTMuMVYwLjJsMC4yLDAuMWwyLjYsMS42YzEuNSwwLjksMi43LDAuOSwzLjYsMGMxLjMtMS40LDMuNC0xLjgsNi4xLDAuMwoJYzEuNywxLjQsMy44LDEuNCw1LTJjMC0wLjEsMC4yLTAuMSwwLjQtMC4ydjEzLjJMMTcuNCwxMmwwLTFWNC4yYy0xLjUsMC44LTMuMiwwLjYtNC45LTAuOEMxMC43LDIsOS41LDIuMSw4LjYsMwoJQzcuMSw0LjUsNS4xLDQuNSwzLDMuM0wyLjYsM3Y5TDEsMTMuMSIvPgo8bGluZWFyR3JhZGllbnQgaWQ9Iui3r+W+hC0zOF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjc3Ljg4NDciIHkxPSIzNzYuMzM1NCIgeDI9Ii0yNzcuNzAyOSIgeTI9IjM3Ni4xOTg1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDE3LjQgMCAwIC0xMi4yODAzIDQ4MzkuMzAwMyA0NjI2Ljk5MjIpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNCMkY1RTUiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNCMkY1RTU7c3RvcC1vcGFjaXR5OjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggaWQ9Iui3r+W+hC0zOF8xXyIgY2xhc3M9InN0MSIgZD0iTTEuMywxMi45aDE3LjRWMC42Yy0xLjIsMy0zLjMsMy41LTUuNCwxLjhDMTEsMC42LDkuMSwwLjcsNy42LDIuMWMtMSwxLTIuNCwxLTQsMEwxLjMsMC43CglWMTIuOXoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoQtMzlfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTIyMC43NjE4IiB5MT0iMzE5LjQ2MzYiIHgyPSItMjIwLjQzMDgiIHkyPSIzMTguODQ5NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0IDAgMCAtNC4zNTExIDg5MyAxNDAwLjkzMzYpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwOEMzQkQiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzODcxRkUiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggaWQ9Iui3r+W+hC0zOSIgY2xhc3M9InN0MiIgZD0iTTgsMTFjMC45LDEuMywxLjUsMi4zLDIsM2MwLjEtMC4xLDAuOC0xLjEsMi0zbC0yLTEuM0w4LDExeiBNMTAsMTAuOWwwLjYsMC40CgljLTAuMiwwLjQtMC40LDAuNy0wLjYsMWMtMC4yLTAuMy0wLjQtMC42LTAuNi0xTDEwLDEwLjl6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0i6Lev5b6ELTM5XzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0yMjAuOTEwMyIgeTE9IjMxOS43MDcxIiB4Mj0iLTIyMC43NTY3IiB5Mj0iMzE5LjQ1MjYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNCAwIDAgLTQuMzUxMSA4OTMgMTQwMC45MzM2KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQjJGNUU1Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojQjJGNUU1O3N0b3Atb3BhY2l0eTowIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGlkPSLot6/lvoQtMzlfMV8iIGNsYXNzPSJzdDMiIGQ9Ik04LDExYzAuOSwxLjMsMS41LDIuMywyLDNjMC4xLTAuMSwwLjgtMS4xLDItM2wtMi0xLjNMOCwxMXogTTEwLDEwbDEuNiwxLjEKCWMtMC44LDEuMi0xLjMsMi0xLjYsMi40Yy0wLjQtMC42LTEtMS40LTEuNi0yLjRMMTAsMTB6Ii8+CjxnIGlkPSLlvaLnirbnu5PlkIgiPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjY1LjAyNTQiIHkxPSIzMzAuNzExOSIgeDI9Ii0yNjQuNjMzNyIgeTI9IjMzMC41MjkxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEwIDAgMCAtNSAyNjYwIDE2NjIpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDhDM0JEIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzM4NzFGRSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMC40LDcuMUwxMCw3LjdMOS42LDcuMUM5LjEsNi40LDguMyw2LDcuNSw2QzYuMSw2LDUsNy4xLDUsOC41UzYuMSwxMSw3LjUsMTFjMC44LDAsMS42LTAuNCwyLjEtMS4xTDEwLDkuMwoJCWwwLjQsMC42YzAuNSwwLjcsMS4yLDEuMSwyLjEsMS4xYzEuNCwwLDIuNS0xLjEsMi41LTIuNVMxMy45LDYsMTIuNSw2QzExLjcsNiwxMC45LDYuNCwxMC40LDcuMXoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI2Ny40Mzc1IiB5MT0iMzQxLjM5ODIiIHgyPSItMjY3LjI1NTciIHkyPSIzNDEuMzIyNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxMC44IDAgMCAtNS44IDI4OTUuNTk5OSAxOTg3Ljk5OTkpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQjJGNUU1Ii8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0IyRjVFNTtzdG9wLW9wYWNpdHk6MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMC4xLDYuOUg5LjlDOS40LDYuMSw4LjUsNS42LDcuNSw1LjZjLTEuNiwwLTIuOSwxLjMtMi45LDIuOXMxLjMsMi45LDIuOSwyLjljMSwwLDEuOS0wLjUsMi40LTEuM2gwLjIKCQljMC41LDAuOCwxLjQsMS4zLDIuNCwxLjNjMS42LDAsMi45LTEuMywyLjktMi45cy0xLjMtMi45LTIuOS0yLjlDMTEuNSw1LjYsMTAuNiw2LjEsMTAuMSw2Ljl6Ii8+CjwvZz4KPGxpbmVhckdyYWRpZW50IGlkPSLmpK3lnIblvaLlpIfku71fMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTE0Ny4zNjU1IiB5MT0iMjE1Ljg0NyIgeDI9Ii0xNDYuNjM2MSIgeTI9IjIxNS4xNTQ0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDIgMCAwIC0yIDMwNi41IDQzOS41KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDVEREI1O3N0b3Atb3BhY2l0eTowLjk5NjkiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzOTZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9IiBjbGFzcz0ic3Q2IiBjeD0iMTIuNSIgY3k9IjguNSIgcj0iMSIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IuakreWchuW9ouWkh+S7vS0yXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0xNDcuMzY1NSIgeTE9IjIxNS44NDciIHgyPSItMTQ2LjYzNjEiIHkyPSIyMTUuMTU0NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyIDAgMCAtMiAzMDEuNSA0MzkuNSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzA1RERCNTtzdG9wLW9wYWNpdHk6MC45OTY5Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMzk2RkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vS0yIiBjbGFzcz0ic3Q3IiBjeD0iNy41IiBjeT0iOC41IiByPSIxIi8+CjxnIGlkPSLnvJbnu4QtM+Wkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yMDAwMDAsIDEyLjAwMDAwMCkiPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoQtNDBfOF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI2Mi4wNzM4IiB5MT0iMzU3LjI0NDUiIHgyPSItMjYxLjc1NjUiIHkyPSIzNTYuNjMwNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg5IDAgMCAtMTAgMjM2MS44IDM1NzYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDhDM0JEIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzM4NzFGRSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGlkPSLot6/lvoQtNDAiIGNsYXNzPSJzdDgiIGQ9Ik0wLDB2Ny41QzAuNiw5LjIsMS44LDEwLDMuNywxMHMzLjYsMCw1LjMsMFY1LjZDNy42LDEuOSw1LjIsMCwxLjgsMEMxLDAsMC40LDAsMCwweiBNMS42LDEuNgoJCWgwLjJjMi43LDAsNC41LDEuMyw1LjYsNC4zdjIuNUgzLjdDMi42LDguNCwyLDgsMS42LDcuMlYxLjZ6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9Iui3r+W+hF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjQ0LjAwNzkiIHkxPSIzMzkuMTczMyIgeDI9Ii0yNDMuNzIzIiB5Mj0iMzM4LjU1OTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS44IDAgMCAtNi44IDE0MTguNzYgMjMxMC4zOTk5KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzA4QzNCRCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzODcxRkUiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBpZD0i6Lev5b6EIiBjbGFzcz0ic3Q5IiBkPSJNMS42LDEuNmgwLjJjMi43LDAsNC41LDEuMyw1LjYsNC4zdjIuNUgzLjdDMi42LDguNCwyLDgsMS42LDcuMlYxLjZ6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9Iui3r+W+hC00MF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjYyLjIyMjIiIHkxPSIzNTcuNDczMSIgeDI9Ii0yNjIuMDc0OSIgeTI9IjM1Ny4yMTg2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDkgMCAwIC0xMCAyMzYxLjggMzU3NikiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNCMkY1RTUiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojQjJGNUU1O3N0b3Atb3BhY2l0eTowIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggaWQ9Iui3r+W+hC00MF8xXyIgY2xhc3M9InN0MTAiIGQ9Ik0wLDB2Ny41QzAuNiw5LjIsMS44LDEwLDMuNywxMHMzLjYsMCw1LjMsMFY1LjZDNy42LDEuOSw1LjIsMCwxLjgsMEMxLDAsMC40LDAsMCwwegoJCSBNMC42LDAuNmgxLjJjMy4xLDAsNS4zLDEuNyw2LjYsNS4xdjMuN0gzLjdjLTEuNiwwLTIuNi0wLjctMy4xLTJWMC42eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoQtNDBfMTBfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0yNjIuMDE0MiIgeTE9IjM1Ny4wOTExIiB4Mj0iLTI2MS43MTYzIiB5Mj0iMzU2LjY4MzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoOSAwIDAgLTEwIDIzNjEuOCAzNTc2KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzJFNUVERTtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyRTVFREUiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBpZD0i6Lev5b6ELTQwXzJfIiBjbGFzcz0ic3QxMSIgZD0iTTAsMHY3LjVDMC42LDkuMiwxLjgsMTAsMy43LDEwczMuNiwwLDUuMywwVjUuNkM3LjYsMS45LDUuMiwwLDEuOCwwQzEsMCwwLjQsMCwwLDB6CgkJIE0wLjgsMC44aDFjMywwLDUuMSwxLjYsNi40LDQuOXYzLjVIMy43Yy0xLjUsMC0yLjQtMC42LTIuOS0xLjlWMC44eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoQtNDBfMTFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0yNTMuMTA0NSIgeTE9IjM0Ny44NjI0IiB4Mj0iLTI1Mi45ODQ2IiB5Mj0iMzQ3LjY0MjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNy4xIDAgMCAtOC4xIDE4MDEuODcwMSAyODI0LjU1KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Q4RkRFRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNENkZDRjAiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBpZD0i6Lev5b6ELTQwXzNfIiBjbGFzcz0ic3QxMiIgZD0iTTAuOSwxdjZjMC41LDEuNCwxLjUsMi4xLDIuOSwyLjFIOGwwLjEtMy42Yy0xLjEtMy0zLTQuNS01LjctNC41TDAuOSwxTDAuOSwxeiBNMSwxaDEuMwoJCUM1LDEsNi45LDIuNSw4LDUuNWwwLDMuNUM2LDguOSw2LDguOSwzLjksOC45QzIuNCw4LjksMS41LDguMywxLDdMMSwxeiIvPgo8L2c+CjxnIGlkPSLnvJbnu4QtM+Wkh+S7vV8xXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuNTAwMDAwLCAxNy4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE1LjUwMDAwMCwgLTE3LjAwMDAwMCkgdHJhbnNsYXRlKDExLjAwMDAwMCwgMTIuMDAwMDAwKSI+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9Iui3r+W+hC00MF8xMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzQ3LjQyOTMiIHkxPSIzNTcuMjQ0NSIgeDI9IjM0Ny43NDY2IiB5Mj0iMzU2LjYzMDQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTkgMCAwIC0xMCAzMTMwIDM1NzYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDhDM0JEIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzM4NzFGRSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGlkPSLot6/lvoQtNDBfNF8iIGNsYXNzPSJzdDEzIiBkPSJNMCwwdjcuNUMwLjYsOS4yLDEuOCwxMCwzLjcsMTBzMy42LDAsNS4zLDBWNS42QzcuNiwxLjksNS4yLDAsMS44LDBDMSwwLDAuNCwwLDAsMHoKCQkgTTEuNiwxLjZoMC4yYzIuNywwLDQuNSwxLjMsNS42LDQuM3YyLjVIMy43QzIuNiw4LjQsMiw4LDEuNiw3LjJWMS42eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoRfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzY1LjUzMjEiIHkxPSIzMzkuMTczMyIgeDI9IjM2NS44MTcxIiB5Mj0iMzM4LjU1OTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTUuOCAwIDAgLTYuOCAyMTIzLjYwMDEgMjMxMC4zOTk5KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzA4QzNCRCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzODcxRkUiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBpZD0i6Lev5b6EXzFfIiBjbGFzcz0ic3QxNCIgZD0iTTEuNiwxLjZoMC4yYzIuNywwLDQuNSwxLjMsNS42LDQuM3YyLjVIMy43QzIuNiw4LjQsMiw4LDEuNiw3LjJWMS42eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSLot6/lvoQtNDBfMTNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM0Ny41Nzc4IiB5MT0iMzU3LjQ3MzEiIHgyPSIzNDcuNzI1IiB5Mj0iMzU3LjIxODYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTkgMCAwIC0xMCAzMTMwIDM1NzYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQjJGNUU1Ii8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0IyRjVFNTtzdG9wLW9wYWNpdHk6MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGlkPSLot6/lvoQtNDBfNV8iIGNsYXNzPSJzdDE1IiBkPSJNMCwwdjcuNUMwLjYsOS4yLDEuOCwxMCwzLjcsMTBzMy42LDAsNS4zLDBWNS42QzcuNiwxLjksNS4yLDAsMS44LDBDMSwwLDAuNCwwLDAsMHoKCQkgTTAuNiwwLjZoMS4yYzMuMSwwLDUuMywxLjcsNi42LDUuMXYzLjdIMy43Yy0xLjYsMC0yLjYtMC43LTMuMS0yVjAuNnoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0i6Lev5b6ELTQwXzE0XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNDcuMzY5OCIgeTE9IjM1Ny4wOTExIiB4Mj0iMzQ3LjY2NzciIHkyPSIzNTYuNjgzMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtOSAwIDAgLTEwIDMxMzAgMzU3NikiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMyRTVFREU7c3RvcC1vcGFjaXR5OjAiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMkU1RURFIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggaWQ9Iui3r+W+hC00MF82XyIgY2xhc3M9InN0MTYiIGQ9Ik0wLDB2Ny41QzAuNiw5LjIsMS44LDEwLDMuNywxMHMzLjYsMCw1LjMsMFY1LjZDNy42LDEuOSw1LjIsMCwxLjgsMEMxLDAsMC40LDAsMCwwegoJCSBNMC44LDAuOGgxYzMsMCw1LjEsMS42LDYuNCw0Ljl2My41SDMuN2MtMS41LDAtMi40LTAuNi0yLjktMS45VjAuOHoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0i6Lev5b6ELTQwXzE1XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNTYuMTgxNiIgeTE9IjM0Ny44ODg0IiB4Mj0iMzU2LjA0OTgiIHkyPSIzNDcuNjgyNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtNy4xIDAgMCAtOC4xIDI1MzIuNDUwMiAyODI0LjU1KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Q4RkRFRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNENkZDRjAiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBpZD0i6Lev5b6ELTQwXzdfIiBjbGFzcz0ic3QxNyIgZD0iTTAuOSwxdjZjMC41LDEuNCwxLjUsMi4xLDIuOSwyLjFIOGwwLjEtMy42Yy0xLjEtMy0zLTQuNS01LjctNC41TDAuOSwxTDAuOSwxeiBNMSwxaDEuMwoJCUM1LDEsNi45LDIuNSw4LDUuNWwwLDMuNUM2LDguOSw2LDguOSwzLjksOC45QzIuNCw4LjksMS41LDguMywxLDdMMSwxeiIvPgo8L2c+Cjwvc3ZnPgo=";

/***/ }),

/***/ "./src/assets/1.png":
/*!**************************!*\
  !*** ./src/assets/1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3baa311cac46687bb05a.png";

/***/ }),

/***/ "./src/assets/example.txt":
/*!********************************!*\
  !*** ./src/assets/example.txt ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = "hello webpack\n";

/***/ }),

/***/ "./src/assets/1.jpg":
/*!**************************!*\
  !*** ./src/assets/1.jpg ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ "../node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./src/assets/data.json5":
/*!*******************************!*\
  !*** ./src/assets/data.json5 ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\n Likes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ "./src/assets/data.toml":
/*!******************************!*\
  !*** ./src/assets/data.toml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ "./src/assets/data.yaml":
/*!******************************!*\
  !*** ./src/assets/data.yaml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"yaml":["slim and flexible","better for configuration"],"object":{"key":"value","array":[{"null_value":null},{"boolean":true},{"integer":1}]},"paragraph":"Blank lines denote\\nparagraph breaks\\n","content":"Or we\\ncan auto\\nconvert line breaks\\nto save space"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ "./src/hello-world.js");
/* harmony import */ var _assets_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/1.png */ "./src/assets/1.png");
/* harmony import */ var _assets_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/1.svg */ "./src/assets/1.svg");
/* harmony import */ var _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/example.txt */ "./src/assets/example.txt");
/* harmony import */ var _assets_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/1.jpg */ "./src/assets/1.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/data.xml */ "./src/assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/data.csv */ "./src/assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_data_toml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/data.toml */ "./src/assets/data.toml");
/* harmony import */ var _assets_data_yaml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/data.yaml */ "./src/assets/data.yaml");
/* harmony import */ var _assets_data_json5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/data.json5 */ "./src/assets/data.json5");












console.log((_assets_data_xml__WEBPACK_IMPORTED_MODULE_7___default()));
console.log((_assets_data_csv__WEBPACK_IMPORTED_MODULE_8___default()));
console.log(_assets_data_toml__WEBPACK_IMPORTED_MODULE_9__.title);
console.log(_assets_data_toml__WEBPACK_IMPORTED_MODULE_9__.owner.name);
console.log(_assets_data_yaml__WEBPACK_IMPORTED_MODULE_10__, 'yaml'); // console.log(yaml.owner.name)

console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_11__.title);
console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_11__.owner.name);
(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__["default"])();
var img = document.createElement('img');
img.src = _assets_1_png__WEBPACK_IMPORTED_MODULE_1__;
document.body.appendChild(img);
var img2 = document.createElement('img');
img2.style.cssText = 'width:600px;height:200px';
img2.src = _assets_1_svg__WEBPACK_IMPORTED_MODULE_2__;
document.body.appendChild(img2);
var block = document.createElement('div');
block.style.cssText = 'width:200px;height:200px;background:aliceblue';
block.classList.add('block-bg');
block.textContent = _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__;
document.body.appendChild(block);
var img3 = document.createElement('img');
img3.style.cssText = 'width:600px;height:240px;display:block';
img3.src = _assets_1_jpg__WEBPACK_IMPORTED_MODULE_4__;
document.body.appendChild(img3);
document.body.classList.add('hello');
var span = document.createElement('span');
span.classList.add('icon');
span.innerHTML = '&#xe85c;';
document.body.appendChild(span);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZJQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQyxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkYsTUFBQUEsT0FBTyxDQUFDLGdCQUFELENBQVA7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FKTSxDQUFQO0FBS0Q7O1NBRWNHOzs7Ozt5TEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNxQkwsU0FBUyxFQUQ5Qjs7QUFBQTtBQUNNTSxZQUFBQSxNQUROO0FBRUVDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBS0EsaUVBQWVELFVBQWY7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2p2QkEsa0JBQWtCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTYuM0BAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhLmNzdiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzNhMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmxlc3M/MzM3YiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL19yZWdlbmVyYXRvci1ydW50aW1lQDAuMTMuOUByZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gZ2V0U3RyaW5nKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgnSGVsbG8gd29ybGQhISEnKVxuICAgIH0sIDIwMDApXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhlbGxvV29ybGQoKSB7XG4gIGxldCBzdHJpbmcgPSBhd2FpdCBnZXRTdHJpbmcoKVxuICBjb25zb2xlLmxvZyhzdHJpbmcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGRcbiIsIm1vZHVsZS5leHBvcnRzID0gW1tcInRvXCIsXCJmcm9tXCIsXCJoZWFkaW5nXCIsXCJib2R5IE1hcnlcIixcIkpvaG5cIixcIlJlbWluZGVyXCIsXCJDYWxsIENpbmR5IG9uIFR1ZXNkYXkgWm9lXCIsXCJCaWxsXCIsXCJSZW1pbmRlclwiLFwiQnV5IG9yYW5nZSBqdWljZSBBdXR1bW5cIixcIkxpbmRzZXlcIixcIkxldHRlclwiLFwiSSBtaXNzIHlvdSBcIl0sW1wiXCJdXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1wibm90ZVwiOntcInRvXCI6W1wiTWFyeVwiXSxcImZyb21cIjpbXCJKb2huXCJdLFwiaGVhZGluZ1wiOltcIlJlbWluZGVyXCJdLFwiYm9keVwiOltcIkNhbGwgQ2luZHkgb24gVHVlc2RheVwiXX19IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaGVsbG9Xb3JsZCBmcm9tICcuL2hlbGxvLXdvcmxkJ1xuaW1wb3J0IGltZ3NyYyBmcm9tICcuL2Fzc2V0cy8xLnBuZydcbmltcG9ydCBsb2dvU3ZnIGZyb20gJy4vYXNzZXRzLzEuc3ZnJ1xuaW1wb3J0IGV4YW1wbGVUZXh0IGZyb20gJy4vYXNzZXRzL2V4YW1wbGUudHh0J1xuaW1wb3J0IGpwZ01hcCBmcm9tICcuL2Fzc2V0cy8xLmpwZydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGUubGVzcydcbmltcG9ydCBEYXRhIGZyb20gJy4vYXNzZXRzL2RhdGEueG1sJ1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vYXNzZXRzL2RhdGEuY3N2J1xuaW1wb3J0IHRvbWwgZnJvbSAnLi9hc3NldHMvZGF0YS50b21sJ1xuaW1wb3J0IHlhbWwgZnJvbSAnLi9hc3NldHMvZGF0YS55YW1sJ1xuaW1wb3J0IGpzb24gZnJvbSAnLi9hc3NldHMvZGF0YS5qc29uNSdcblxuY29uc29sZS5sb2coRGF0YSlcbmNvbnNvbGUubG9nKE5vdGVzKVxuXG5jb25zb2xlLmxvZyh0b21sLnRpdGxlKVxuY29uc29sZS5sb2codG9tbC5vd25lci5uYW1lKVxuXG5jb25zb2xlLmxvZyh5YW1sLCd5YW1sJylcbi8vIGNvbnNvbGUubG9nKHlhbWwub3duZXIubmFtZSlcblxuY29uc29sZS5sb2coanNvbi50aXRsZSlcbmNvbnNvbGUubG9nKGpzb24ub3duZXIubmFtZSlcblxuaGVsbG9Xb3JsZCgpO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaW1nLnNyYyA9IGltZ3NyY1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXG5cbmNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaW1nMi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjYwMHB4O2hlaWdodDoyMDBweCdcbmltZzIuc3JjID0gbG9nb1N2Z1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcyKVxuXG5jb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5ibG9jay5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDtiYWNrZ3JvdW5kOmFsaWNlYmx1ZSdcbmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWJnJylcbmJsb2NrLnRleHRDb250ZW50ID0gZXhhbXBsZVRleHRcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxvY2spXG5cbmNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaW1nMy5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjYwMHB4O2hlaWdodDoyNDBweDtkaXNwbGF5OmJsb2NrJ1xuaW1nMy5zcmMgPSBqcGdNYXBcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nMylcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWxsbycpXG5cbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbnNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbicpXG5zcGFuLmlubmVySFRNTCA9ICcmI3hlODVjOydcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbilcblxuIl0sIm5hbWVzIjpbImdldFN0cmluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImhlbGxvV29ybGQiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaW1nc3JjIiwibG9nb1N2ZyIsImV4YW1wbGVUZXh0IiwianBnTWFwIiwiRGF0YSIsIk5vdGVzIiwidG9tbCIsInlhbWwiLCJqc29uIiwidGl0bGUiLCJvd25lciIsIm5hbWUiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbWcyIiwic3R5bGUiLCJjc3NUZXh0IiwiYmxvY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImltZzMiLCJzcGFuIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==