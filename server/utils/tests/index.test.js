import { stringifyWithCheck, addWhereClause, isTestEnv, totalConnectionFields } from '@utils/index';

describe('isTestEnv', () => {
  it("should return true if the ENVIRONMENT_NAME is 'test'", () => {
    expect(isTestEnv()).toBe(true);
  });
});

describe('addWhereClause', () => {
  it("should construct the whereClause correctly'", () => {
    const where = addWhereClause('', 'A = B');
    expect(where).toBe('  WHERE ( A = B ) ');
    expect(addWhereClause(where, 'A = B')).toBe('   WHERE ( A = B )  AND ( A = B ) ');
  });
});

describe('totalConnectionFields', () => {
  it('should get the fullcount', () => {
    expect(totalConnectionFields.connectionFields.total.resolve({ fullCount: 10 })).toBe(10);
  });
});

describe('stringifyWithCheck', () => {
  it('should return the strigified message', () => {
    const obj = { a: 'b' };
    const res = stringifyWithCheck(obj);
    expect(res).toBe(JSON.stringify(obj));
  });
  it('should not throw an error if its not able to stringify the object', () => {
    const obj = { a: 'b' };
    obj.obj = obj;
    const res = stringifyWithCheck(obj);
    expect(res).toBe('unable to unfurl message: [object Object]');
  });
});
