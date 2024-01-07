/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U'); // replace all instances of 'T' with 'U'
}

// Unit tests
describe("DNAtoRNA", () => {
    it("should convert 'GCAT' to 'GCAU'", () => {
        expect(DNAtoRNA("GCAT")).toEqual("GCAU");
    });

    it("should convert 'TTTT' to 'UUUU'", () => {
        expect(DNAtoRNA("TTTT")).toEqual("UUUU");
    });

    it("should convert 'ACGT' to 'ACGU'", () => {
        expect(DNAtoRNA("ACGT")).toEqual("ACGU");
    });

    it("should convert 'GCTA' to 'GCUA'", () => {
        expect(DNAtoRNA("GCTA")).toEqual("GCUA");
    });

    it("should convert an empty string to an empty string", () => {
        expect(DNAtoRNA("")).toEqual("");
    });
});