function test1() {
    try {
        console.log('Landing...')
        document.getElementById('landing').submit()
        setTimeout(function () {
            try {
                document.getElementById('verify_button').click()

                setTimeout(function () { });
            } catch (e) { }

        }, 2000)

    } catch (e) { }

    try {
        document.getElementById('verify_button2').click()

    } catch (e) { }

    try {
        document.getElementById('two_steps_btn').click()

    } catch (e) { }
}

//idList = [document.getElementById('landing'), document.getElementById('verify_button'), document.getElementById('verify_button2'), document.getElementById('two_steps_btn')]
currentI = 0
idList = ['landing', 'verify_button', 'verify_button2', 'two_steps_btn']

function test2() {
    intervalKey = setInterval(function () {

        currentUrl = window.location.href

        console.log('currentUrl => ' + currentUrl)
        if (currentUrl.includes('techmny')) {

            console.log('currentI => ' + currentI + ' Name => ' + idList[currentI])
            try {
                if (currentI == 0) {
                    console.log('Landing page submitting...')
                    document.getElementById(idList[currentI++]).submit();
                }
                if (currentI == 3) {
                    console.log('two_steps_btn Redirecting...')
                    link = document.getElementById(idList[currentI++]).href
                    console.log('Href => ' + link)

                    if (link) {
                        window.location = link
                    }
                } else {
                    console.log('Clicking...')
                    document.getElementById(idList[currentI++]).click();
                }
            } catch (e) {
                console.log('Error ==> ' + e)
            }
            if (currentI >= idList.length) {
                currentI = 0
            }

        } else {

            console.log('Driveseed....')
            try {
                link = document.getElementById('gdlink').href
                console.log('Opening link => ' + link);
                window.location = link
            } catch (e) {
                console.log('Problem clicking link not found')
            }
            // try {
            //     document.getElementById('ddl').click()
            // } catch (e) {
            //     console.log('ddl not found')
            // }
            try {
                document.getElementById('drc').click()
            }
            catch (e) {
                console.log('drc not found')
            }
        }

    }, 500)
}
test2()
