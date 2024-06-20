var source = {};
var vi = {};
var final = {};
var sorted = {};
var newData = {};
var unused = {};

//find new keys.
Object.keys(source).forEach(i => {
  if (!(i in vi)) {
    newData[i] = source[i];
  }
})

//find unused keys.
Object.keys(vi).forEach(i => {
  if (!(i in source)) {
    unused[i] = vi[i];
  }
})

//sort by keys.
Object.keys(final).sort().forEach(i => {
  sorted[i] = final[i];
});


// var x = {}
// Object.keys(vi).forEach(i => {
//   if (vi[i] !="") {
//     x[i] = vi[i]
//   }
// })

// Object.keys(vi).forEach(i => {
//   if (vi[i] =="") {
//     x[i] = i in source ? source[i] : ""
//   }
// })
