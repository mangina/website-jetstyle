$(function () {
    'use strict';

    var btn = $('.feedback-form__submit .button'),
        selectBusiness = $('select[name="business"]'),
        selectCity = $('select[name="city"]'),
        selectPeople = $('select[name="people'),
        selectLift = $('select[name="lift"]'),
        selectPlace = $('select[name="place"]'),
        description = $('option:selected'),
        message = $('.feedback-form__row_message');

        description.hide();

    btn.click(function() {
        if ((selectBusiness.val() === "")||(selectCity.val() === "")||(selectPeople.val() === "")||
            (selectLift.val() === "")||(selectPlace.val() === "")) {
            message.show();
        } else {
            message.hide();
        }
    });
});
