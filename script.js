let discord_text = 'stormach1'; // instead of 'stormach1', enter your discord

function OnClickCopy()
{
    navigator.clipboard.writeText(discord_text);
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