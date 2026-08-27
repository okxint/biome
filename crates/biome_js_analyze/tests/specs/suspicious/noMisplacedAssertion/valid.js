/* should not generate diagnostics */
describe("msg", () => {
	it("msg", () => {
		expect("something").toBeTrue()
	})
})

test("something", () => {
	expect("something").toBeTrue()
})

test.each(arr)("works as expected", () => {
	expect();
});

test.concurrent.each(arr)("works as expected", () => {
	expect();
});

it.concurrent.each(arr)("works as expected", () => {
	expect();
});

test.concurrent.only.each(arr)("works as expected", () => {
	expect();
});

Deno.test("something", () => {
	expect("something").toBeTrue()
})

await waitFor(() => {
	expect(111).toBe(222);
});

expect.any(Number);

expect.anything()

expect.closeTo(0.3, 5)

expect.arrayContaining(['Alice', 'Bob'])

expect.objectContaining({
  x: expect.any(Number),
  y: expect.any(Number),
})

expect.stringContaining('Hello world!')

expect.stringMatching(/^Alic/)
expect.stringMatching(/^[BR]ob/)

expect.extend({
  toBeFoo: (received, expected) => {
	if (received !== 'foo') {
      return {
	    message: () => `expected ${received} to be foo`,
		pass: false,
	  }
	}
  },
});

expect.addEqualityTesters([areVolumesEqual]);

expect.addSnapshotSerializer(serializer);

// test.prop / it.prop from @fast-check/vitest and @fast-check/jest (issue #11454)
import { fc, test as testProp } from "@fast-check/vitest";
testProp.prop([fc.string()])("round-trips", (s) => {
	expect(s).toBe(s);
});

import { fc as fc2, it as itProp } from "@fast-check/jest";
itProp.prop([fc2.integer()])("is associative", (n) => {
	expect(n + 0).toBe(n);
});
