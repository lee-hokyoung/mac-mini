$('#btn_submit').on('click',()=>{
    let formData = $('form[name=createForm]').serializeArray();
    let id = $('input[name=id]').val(), url;
    if(id) url = '/achieving/update';
    else url = '/achieving/create';
    $.ajax({
        type:'post',
        url:url,
        data:formData,
        dataType:'json',
        success:(res) => {
            if(res.result === 1){
                alert(res.comment);
                location.reload();
            }
        },error:(err) => {console.error(err);}
    });
});
$('#btn_reset').on('click', ()=>{
    $('form[name=createForm]')[0].reset();
    $('textarea').empty();
    $('input[name=id]').val('');
    $('h5[name=title]').text('신규 등록');
});
$('button[name=delete]').on('click', (btn) => {
    if(confirm('삭제하시겠습니까?')){
        let id = btn.currentTarget.dataset.store;
        $.ajax({
            type:'post',
            url:'/achieving/delete',
            data:{id:id},
            dataType:'json',
            success:(res)=>{
                if(res.result === 1) console.log(res.comment);
                location.reload();
            }, error:(err)=>{console.error(err);}
        });
    }
    event.stopPropagation();
});
$('tbody tr').on('click', (tr)=>{
    let id = tr.currentTarget.id;
    $.ajax({
        type:'post',
        url:'/achieving/read',
        data:{id:id},
        dataType:'json',
        success:(res) => {
            $('input[name=id]').val(res._id);
            $('input[name=name]').val(res.name);
            $('input[name=age]').val(res.age);
            $('input[name=gender]').val(res.gender);
            $('input[name=concept]').val(res.concept);
            $('input[name=address]').val(res.address);
            $('input[name=faith]').val(res.faith);
            $('input[name=location]').val(res.location);
            $('input[name=date]').val(res.date);
            $('textarea[name=worry]').text(res.worry);
            $('textarea[name=interest]').text(res.interest);
            $('textarea[name=environment]').text(res.environment);
            $('textarea[name=etc]').text(res.etc);
            $('input[name=leader_id]').val(res.leader_id);

            $('h5[name=title]').text('데이터 수정');
        },error:(err) => {console.error(err);}
    });
});
$(document).ready(()=>{
    $('#datepicker').datepicker({
        format:'yyyy-mm-dd'
    });
});
$('#btn_user_create').on('click', () => {
    let id = $('input[name=user_id]').val(), url;
    if(id) url = '/user/update';
    else url = 'user/create';
    console.log(url);
    let formData = $('form[name=userForm]').serializeArray();
    $.ajax({
        type:'post',
        url:url,
        data:formData,
        dataType:'json',
        success:(res) => {
            if(res.result === 1){
                alert(res.comment);
                location.reload();
            }
        }, error:(err)=>{console.error(err);}
    });
});
$('#createNewMember').on('click', () => {$('#modal_new_member').modal('show');});
$('#btn_newMember_create').on('click', () => {
    let formData = $('form[name=newMemberForm]').serializeArray();
    $.ajax({
        type:'post',
        url:'/user/create',
        data:formData,
        dataType:'json',
        success:(res)=>{alert(res.comment); console.log(res);},
        error:(err)=>{console.error(err)}
    });
});