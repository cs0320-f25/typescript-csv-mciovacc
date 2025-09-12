import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(11);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV with additional quote marks", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results[5]).toEqual(["Maximilian", "20"])
  expect(results[6]).toEqual(["Billy", "32"])
})

test("parseCSV with additional commas", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results[7]).toEqual(["Jayden, Daniels", "25"])
  expect(results[8]).toEqual(["Austin", "32,5"])
})

test("parseCSV with additional blank space", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results[9]).toEqual(["Ricky", "41"])
  expect(results[10]).toEqual(["Lou", "93"])
})