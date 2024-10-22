let discord_text = 'stormach1';

function OnClickCopy()
{
    navigator.clipboard.writeText(discord_text);
    $.notify("Access granted", "success");
}
function pushNotify() {
    new Notify ({
        status: 'success',
        title: 'copied!',
        text: 'my discord is copied.',
        effect: 'slide',
        speed: 300,
        customClass: '',
        customIcon: '',
        showIcon: true,
        showCloseButton: false,
        autoclose: true,
        autotimeout: 2000,
        notificationsGap: null,
        notificationsPadding: null,
        type: 'outline',
        position: 'right top',
        customWrapper: '',
    })
}