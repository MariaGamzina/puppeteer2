Feature: Book     
    Scenario: Book seat test
        Given user is on "/client/index.php" page
        When user click by dayThree
        When user click by Stalker
        When user click by seatone
        When user click by button
        Then user sees button "Получить код бронирования"

    @only
    Scenario: Book vip seat test
        Given user is on "/client/index.php" page
        When user click by dayThree
        When user click by Vedmak
        When user click by seattwo
        When user click by button
        Then user sees button "Получить код бронирования"

    Scenario: Book disable seat test
        Given user is on "/client/index.php" page
        When user click by dayThree
        When user click by MickeyMouse
        When user click by seatthree
        When user click by button
        Then user can not click button "Забронировать"