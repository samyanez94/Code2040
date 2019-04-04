$(document).ready(function () {

    /*----------------------------------------
    Step I: Registration
    -----------------------------------------*/

    let registerAPI = "http://challenge.code2040.org/api/register";
    let key = "23f628a92ca88754a881ba8ec1d0e4d7";
    let githubURL = "https://github.com/samyanez94/Code2040.git";

    let registerData = {
        token: key,
        github: githubURL
    };

    // HTTP POST request.
    $.post(registerAPI, registerData, function (data) {
        console.log(data);
    });

    /*----------------------------------------
    Step II: Reverse a string
    -----------------------------------------*/

    let reverseAPI = "http://challenge.code2040.org/api/reverse";
    let validateReverseAPI = "http://challenge.code2040.org/api/reverse/validate";

    // Reverses the String data and performs the HTTP POST request.
    function reverseString(data) {
        let reversedString = data.split("").reverse().join("");
        $.post(validateReverseAPI, {
                token: key,
                string: reversedString
            },
            function (data) {
                console.log(data);
            });
    };

    // HTTP POST request.
    $.post(reverseAPI, {
        token: key
    }, reverseString);

    /*----------------------------------------
    Step III: Needle in a haystack
    -----------------------------------------*/

    let haystackAPI = "http://challenge.code2040.org/api/haystack";
    let validateHaystackAPI = "http://challenge.code2040.org/api/haystack/validate";

    // Find the index of the needle using a linear search and performs the HTTP POST request.
    function findNeedle(data) {
        let index = linearSearch(data.haystack, data.needle);
        $.post(validateHaystackAPI, {
            token: key,
            needle: index
        }, function (data) {
            console.log(data);
        });
    };

    // Linear seach. Sequencially checks each item of an array for the target value until a match is found.
    function linearSearch(items, value) {
        var index = 0;
        var found = false;

        while (!found && index <= items.length - 1) {
            if (items[index] == value)
                found = true
            else
                index++
        }
        return index
    };

    // HTTP POST request.
    $.post(haystackAPI, {
        token: key
    }, findNeedle);

    /*----------------------------------------
    Step IV: Prefix
    -----------------------------------------*/

    let prefixAPI = "http://challenge.code2040.org/api/prefix";
    let validatePrefixAPI = "http://challenge.code2040.org/api/prefix/validate";

    // Creates an array containing only the strings that do not start with the prefix in data and performs the HTTP POST request.
    function hasPrefix(data) {
        var strings = [];
        for (var str in data.array) {
            if (!data.array[str].startsWith(data.prefix))
                strings.push(data.array[str]);
        }
        $.post(validatePrefixAPI, {
            token: key,
            array: strings
        }, function (data) {
            console.log(data);
        });
    };

    // HTTP POST request.
    $.post(prefixAPI, {
        token: key
    }, hasPrefix);

    /*----------------------------------------
    Step V: The dating game
    -----------------------------------------*/

    let datingAPI = "http://challenge.code2040.org/api/dating";
    let validateDatingAPI = "http://challenge.code2040.org/api/dating/validate";

    // Converts an ISO 8601 datestamp into a Date object and adds some seconds to it. Then it converts it backs to and  ISO 8601 string to be send together with the POST request.
    function dating(data) {
        let date = new Date(data.datestamp);
        date.setSeconds(date.getSeconds() + data.interval);
        dateString = date.toISOString().split('.000').join('');
        $.post(validateDatingAPI, {
            token: key,
            datestamp: dateString
        }, function (data) {
            console.log(data);

        });
    };

    // HTTP POST request.
    $.post(datingAPI, {
        token: key
    }, dating);


}); // end ready
