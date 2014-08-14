// NOTICE macrotea@qq.com 此测试文件针对 xxxx 进行方法或者功能的测试

QUnit.assert.contains = function (needle, haystack, message) {
    var actual = haystack.indexOf(needle) > -1;
    QUnit.push(actual, actual, needle, message);
};

test("test-showcase", function (assert) {

    ok(1 == "1", "Passed!");

    ok(10 > 2, "Passed!");

    deepEqual(1, 1);

    notEqual(1, "2");

    propEqual(
        {
            age: 12,
            name: "tea"
        },
        {
            name: "tea",
            age: 12
        }
    );

    assert.contains(1,[1,2,3]);
});

//测试失败参考:
//ok(false, "false fails");
//ok(0, "0 fails");
//ok(NaN, "NaN fails");
//ok("", "empty string fails");
//ok(null, "null fails");
//ok(undefined, "undefined fails");