// NOTICE macrotea@qq.com 此测试文件针对 xxxx 进行方法或者功能的测试

QUnit.assert.contains = function (needle, haystack, message) {
    var actual = haystack.indexOf(needle) > -1;
    QUnit.push(actual, actual, needle, message);
};

test("test-range", function (assert) {

    var numbers = Stream.range(5, 8);
    ok(numbers.length() == 4);
    ok(numbers.item(0) == 5);
    ok(numbers.item(1) == 6);
    ok(numbers.item(2) == 7);
    ok(numbers.item(3) == 8);
});


test("test-take", function (assert) {

    var numbers = Stream.range(10, 15).take(3);
    ok(numbers.item(0) == 10);
    ok(numbers.item(1) == 11);
    ok(numbers.item(2) == 12);
});


test("test-filter", function (assert) {

    var arr =  [];

    function convertItem(x) {
        arr.push(x);
    }

    var numbers = Stream.range(10, 12);
    numbers.walk(convertItem);

    ok(arr.length == 3);
    ok(arr[0] == 10);
    ok(arr[1] == 11);
    ok(arr[2] == 12);
});

test("test-filter", function (assert) {

    function checkIfOdd(x) {
        if (x % 2 == 0) {
            return false;
        }
        else {
            //此元素被返回
            return true;
        }
    }

    var numbers = Stream.make(4,3, 15,20);
    var onlyOdds = numbers.filter(checkIfOdd);
    ok(onlyOdds.length() == 2);
    ok(onlyOdds.item(0) == 3);
    ok(onlyOdds.item(1) == 15);
});

test("test-map", function (assert) {

    function doubleNumber(x) {
        return 2 * x;
    }

    var numbers = Stream.make(10, 20);
    var doubles = numbers.map(doubleNumber);
    ok(doubles.length() == 2);
    ok(doubles.item(0) == 20);
    ok(doubles.item(1) == 40);
});

test("test-basic", function (assert) {

    var s = Stream.make(10, 20, 30);

    ok(s.length() == 3);
    ok(s.head() == 10);
    ok(s.item(0) == 10);

    var t = s.tail();//获得除第一个元素后的剩下元素
    ok(t.length() == 2);
    ok(t.head() == 20);
    ok(t.item(1) == 30);
    equal(t.empty(),false);

});

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