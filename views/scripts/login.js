$(document).ready(() => {
    $('#login').submit((event) => {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/login',
            data: $('#login').serialize(),
            dataType: 'json',
            success: (response) => {
                $('#login')[0].reset();

                document.getElementById('check').innerHTML = response.Success;
                setTimeout(() => {
                    document.getElementById('check').innerHTML = '';
                }, 3000);
                if (response.Success == 'Success!') {
                    document.getElementById('msg-box').click();
                }
            },
            error: () => {}
        });
    });
});
