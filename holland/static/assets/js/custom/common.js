let path = location.pathname.split('/')[1];
let $title = $('a[name=nav-title]');
switch(path){
    case 'test':
        $title.text('홀랜드검사');
        $('li[name=test]').addClass('active');
        break;
    case 'achieving':
        $title.text('달성');
        $('li[name=achieving]').addClass('active');
        break;
    default:
        $title.text('');
        break;
}