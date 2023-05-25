/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
  "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
  "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar."
];

function result(sentences) {
  let maksimalkata = 0; // membuat variabel untuk menampung jumlah kata maksimal
  for (let i = 0; i < sentences.length; i++) {
    // melakukan perulangan sebanyak panjang dalam array sentences
    const kata = sentences[i].split(" "); // memisahkan setiap kata dalam array sentences
    if (kata.length > maksimalkata) {
      // jika panjang kata lebih besar dari maksimalkata
      maksimalkata = kata.length; // maka maksimalkata akan berubah menjadi panjang kata
    }
  }
  return maksimalkata; // mengembalikan nilai maksimalkata
}

console.log(result(sentences));
