function focus_input(id){
    if ($('#user-input-'+id).val() == ""){
        $("#input-area-"+id).removeClass("focus")
    } 
    else{
        $("#input-area-"+id).addClass("focus")
    }
}

function ChangeToMainA(){
    $("#main-box").fadeIn(200)
}
function ChangeToAccA(){
    $("#account-box").fadeIn(200)
}
function ChangeToSetA(){
    $("#setting-box").fadeIn(200)
}
function ChangeToMdlA(){
    $("#models-box").fadeIn(200)
}
function ChangeToWdgA(){
    $("#widgets-box").fadeIn(200)
}
function ChangeToRtsA(){
    $("#rights-box").fadeIn(200)
}

function ChangeToMain(){
    $("#login-box").fadeOut(1)
    $("#account-box").fadeOut(200)
    $("#models-box").fadeOut(200)
    $("#widgets-box").fadeOut(200)
    $("#setting-box").fadeOut(200)
    $("#rights-box").fadeOut(200)
    setTimeout(ChangeToMainA,250)
    $("#main").addClass("active")
    $("#acc").removeClass("active")
    $("#wig").removeClass("active")
    $("#mod").removeClass("active")
    $("#set").removeClass("active")
    $("#rts").removeClass("active")
}

function ChangeToAcc(){
    $("#login-box").fadeOut(1)
    $("#main-box").fadeOut(200)
    $("#models-box").fadeOut(200)
    $("#widgets-box").fadeOut(200)
    $("#setting-box").fadeOut(200)
    $("#rights-box").fadeOut(200)
    setTimeout(ChangeToAccA,250)
    $("#main").removeClass("active")
    $("#acc").addClass("active")
    $("#wig").removeClass("active")
    $("#mod").removeClass("active")
    $("#set").removeClass("active")
    $("#rts").removeClass("active")
}

function ChangeToSet(){
    $("#login-box").fadeOut(1)
    $("#main-box").fadeOut(200)
    $("#account-box").fadeOut(200)
    $("#models-box").fadeOut(200)
    $("#widgets-box").fadeOut(200)
    $("#rights-box").fadeOut(200)
    setTimeout(ChangeToSetA,250)
    $("#main").removeClass("active")
    $("#acc").removeClass("active")
    $("#wig").removeClass("active")
    $("#mod").removeClass("active")
    $("#set").addClass("active")
    $("#rts").removeClass("active")
}

function ChangeToMdl(){
    $("#login-box").fadeOut(1)
    $("#main-box").fadeOut(200)
    $("#account-box").fadeOut(200)
    $("#widgets-box").fadeOut(200)
    $("#setting-box").fadeOut(200)
    $("#rights-box").fadeOut(200)
    setTimeout(ChangeToMdlA,250)
    $("#main").removeClass("active")
    $("#acc").removeClass("active")
    $("#wig").removeClass("active")
    $("#mod").addClass("active")
    $("#set").removeClass("active")
    $("#rts").removeClass("active")
}

function ChangeToWdg(){
    $("#login-box").fadeOut(1)
    $("#main-box").fadeOut(200)
    $("#account-box").fadeOut(200)
    $("#models-box").fadeOut(200)
    $("#setting-box").fadeOut(200)
    $("#rights-box").fadeOut(200)
    setTimeout(ChangeToWdgA,250)
    $("#main").removeClass("active")
    $("#acc").removeClass("active")
    $("#wig").addClass("active")
    $("#mod").removeClass("active")
    $("#set").removeClass("active")
    $("#rts").removeClass("active")
}

function ChangeToRts(){
    $("#login-box").fadeOut(1)
    setTimeout(ChangeToRtsA,250)    
    $("#main").removeClass("active")
    $("#acc").removeClass("active")
    $("#wig").removeClass("active")
    $("#mod").removeClass("active")
    $("#set").removeClass("active")
    $("#rts").addClass("active")
}

function Loading(){
    $("#loading").fadeIn(100)
}
function Load() {
    $("#loading").fadeOut(100)
}

function show_widgets_edit(id) {
    $("#widgets_add").fadeOut(100)
    $("#widgets_edit").fadeIn(100)
    var name = $("#widgets_"+id).attr("widgets_name")
    var url = $("#widgets_"+id).attr("widgets_url")
    var size = $("#widgets_"+id).attr("widgets_size")
    var ava = $("#widgets_"+id).attr("widgets_available")
    if (ava == "True"){
        $("#widgets_available_edit_Checkbox").attr("checked",true)
    }
    if (ava == "False"){
        $("#widgets_available_edit_Checkbox").prop("checked",false)
    }
    $("#preview_widgets_edit").attr("src", url)
    $("#widgets_contentbox_pre_edit_button_"+size).addClass("active")
    $("#widgets_size_edit").val(size)
    $("#widgets_id_edit").val(id)
    $("#widgets_name_edit").val(name)
    $("#widgets_url_edit").val(url)
    $("#widgets_available_edit").val(ava)
}

function show_model_edit(id) {
    $("#model_add").fadeOut(100)
    $("#model_edit").fadeIn(100)
    var name = $("#model_"+id).attr("model_name")
    var url = $("#model_"+id).attr("model_url")
    var type = $("#model_"+id).attr("model_type")
    var api_key = $("#model_"+id).attr("model_key")
    var path = $("#model_"+id).attr("model_launch_path")
    var comp = $("#model_"+id).attr("model_launch_comp")
    $("#model_id_edit").val(id)
    $("#model_type_edit").val(type)
    $("#model_name_edit").val(name)
    $("#model_key_edit").val(api_key)
    $("#model_url_edit").val(url)
    $("#launch_comp_edit").val(comp)
    $("#launch_path_edit").val(path)
}
function show_model_add() {
    $("#model_edit").fadeOut(100)
    $("#model_add").fadeIn(100)
    $("#model_name").val("")
    $("#model_url").val("")
}

function show_widgets_add() {
    $("#widgets_edit").fadeOut(100)
    $("#widgets_add").fadeIn(100)
    $("#widgets_name").val("")
    $("#widgets_url").val("")
}

function show_session_add() {
    $('#session_add').fadeIn(110)
}

//版本号
$(document).ready(function(){
    $("button").click(function(){
      $("#rights-box").fadeOut(100);
      $("#rts").removeClass("active")
    });
});

$(document).ready(function(){
    $("#widgets_close").click(function(){
        $("#widgets_edit").fadeOut(100);
    });
    $("#widgets_close_add").click(function(){
        $("#widgets_add").fadeOut(100);
      });
    $("#model_close").click(function(){
        $("#model_edit").fadeOut(100);
    });
    $("#model_close_add").click(function(){
        $("#model_add").fadeOut(100);
      });
    $("#model_details_button").click(function(){
        now = $('#model_details').attr('status')
        if (now == "off"){
            $('#model_details').fadeIn(300);
            now = $('#model_details').removeAttr('status')
            now = $('#model_details').attr('status',"on")
            $("#model_details_button").removeClass("fa fa-caret-square-o-down")
            $('#model_details_button').addClass("fa fa-caret-square-o-up")
        }
        if (now == "on"){
            $('#model_details').fadeOut(300);
            now = $('#model_details').removeAttr('status')
            now = $('#model_details').attr('status',"off")
            $('#model_details_button').removeClass("fa fa-caret-square-o-up")
            $("#model_details_button").addClass("fa fa-caret-square-o-down")
        }
    })
    $("#session_close").click(function(){
        $("#session_add").fadeOut(100);
    });
    $("#session_cancel").click(function(){
        $("#session_add").fadeOut(100);
    });
});

$(document).ready(function() {
//   拖动
var node = document.querySelector("#widgets_container")
	var draging = null
	node.ondragstart = function(event) {
		console.log("start:")
		// dataTransfer.setData把拖动对象的数据存入其中，可以用dataTransfer.getData来获取数据
		event.dataTransfer.setData("te", event.target.innerText)
		draging = event.target
	}
	node.ondragover = function(event) {
		console.log("over:")
		// 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式
		event.preventDefault()
		var target = event.target
		if (target.nodeName === "LI" && target !== draging) {
			// 获取初始位置
			var targetRect = target.getBoundingClientRect()
			var dragingRect = draging.getBoundingClientRect()
			if (target) {
				// 判断是否动画元素
				if (target.animated) {
					return;
				}
			}
			if (_index(draging) < _index(target)) {
				// 目标比元素大，插到其后面
				// extSibling下一个兄弟元素
				target.parentNode.insertBefore(draging, target.nextSibling)
			} else {
				// 目标比元素小，插到其前面
				target.parentNode.insertBefore(draging, target)
			}
			_animate(dragingRect, draging)
			_animate(targetRect, target)
            load_active_widgets()
            upload_widgets_edit_order()
		}
	}
var node_tabs = document.querySelector("#tabs")
	var draging = null
	node_tabs.ondragstart = function(event) {
		console.log("start:")
		// dataTransfer.setData把拖动对象的数据存入其中，可以用dataTransfer.getData来获取数据
		event.dataTransfer.setData("te", event.target.innerText)
		draging = event.target
	}
	node_tabs.ondragover = function(event) {
		console.log("over:")
		// 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式
		event.preventDefault()
		var target = event.target
		if (target.nodeName === "LI" && target !== draging) {
			// 获取初始位置
			var targetRect = target.getBoundingClientRect()
			var dragingRect = draging.getBoundingClientRect()
			if (target) {
				// 判断是否动画元素
				if (target.animated) {
					return;
				}
			}
			if (_index(draging) < _index(target)) {
				// 目标比元素大，插到其后面
				// extSibling下一个兄弟元素
				target.parentNode.insertBefore(draging, target.nextSibling)
			} else {
				// 目标比元素小，插到其前面
				target.parentNode.insertBefore(draging, target)
			}
			_animate(dragingRect, draging)
			_animate(targetRect, target)
            Refresh_Tabs()
            upload_session_edit_order()
		}
	}

})

//Single
function change_tab(id){
    var now = $(".current").val()
    $(".current").removeClass("current")
    $("#Tab"+id).addClass("current")
    $('#'+now).fadeOut(1)
    $('#'+id).fadeIn(1)
    alert(id)
    smoothScroll("output-"+id);
}

function ReadFile(id){
    $.ajax({
        url: "/ReadFile",
        method: "POST",
        success: function(data){
            $("#"+id).val(data)
        }
    })
}

//ajax Interface
//edit
function upload_session_edit_order(){
    var ele = document.getElementById("tabs")
    var child = ele.firstElementChild
    var last = ele.lastElementChild
    for (i = 1;child.nextElementSibling != last;i++){
        var value = child.value
        $.ajax({
            url: "/EditSessionOrder",
            method: "POST",
            data: {
                id: value,
                order: i,
            },
            success: function(response){
                if (response.response){
                    Refresh_Tabs()
                }
            }
        })
        child = child.nextElementSibling
    }
}

function upload_widgets_edit_order(){
    var ele = document.getElementById("widgets_container")
    var child = ele.firstElementChild
    var last = ele.lastElementChild
    for (i =1;child.nextElementSibling != last ;i++){
        var value = child.id
        $.ajax({
            url: "/EditWidgetsOrder",
            method: "POST",
            data: {
                id: value,
                order: i,
            },
            success: function(response){
                if (response.response){
                    load_active_widgets()
                }
            }
        })
        child = child.nextElementSibling
    }
}

function upload_widgets_edit(){
    $.ajax({
        url: "/edit_widgets",
        method : "POST",
        data : {
            operation: "edit",
            id: $("#widgets_id_edit").val(),
            name: $("#widgets_name_edit").val(),
            url: $("#widgets_url_edit").val(),
            size: $("#widgets_contentbox_pre_edit_val").val(),
            ava: $("#widgets_available_edit").val(),
        },
        success: function(response){
            if (response.response){
                alert(response.message,"success")
            }
            else{
                alert(response.message,"danger")
            }
            load_active_widgets()
            load_widgets()
            $("#widgets_edit").fadeOut(100);
        }
    })
}

function upload_widgets_del(){
    $.ajax({
        url: "/edit_widgets",
        method : "POST",
        data : {
            operation: "del",
            id: $("#widgets_id_edit").val(),
            name: $("#widgets_name_edit").val(),
            url: $("#widgets_url_edit").val(),
            size: $("#widgets_size_edit").val(),
            ava: $("#widgets_avaliable_edit").val(),
        },
        success: function(response){
            if (response.response){
                alert(response.message,"success")
            }
            else{
                alert(response.message,"danger")
            }
            load_active_widgets()
            load_widgets()
            $("#widgets_edit").fadeOut(100);
        }
    })
}

function upload_widgets_add(){
    if ($("#widgets_name_add").val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    if ($("#widgets_url_add").val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    if ($("#widgets_size_add").val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    $.ajax({
        url: "/edit_widgets",
        method : "POST",
        data : {
            id: -1,
            name: $("#widgets_name_add").val(),
            url: $("#widgets_url_add").val(),
            ava: $("#widgets_available_add").val(),
            size: $("#widgets_size_add").val(),
        },
        success: function(response){
            if (response.response){
                alert(response.message,"success")
            }
            else{
                alert(response.message,"danger")
            }
            load_active_widgets()
            load_widgets()
            $("#widgets_add").fadeOut(100);
            $("#widgets_name_add").val("");
            $("#widgets_url_add").val("");
            $("#widgets_available_add").val("False");
            $("#widgets_available_add_Checkbox").prop("checked",false);
        }
    })
}


function Add_session() {
    if ($("#session_comment").val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    comment = $("#session_comment").val()
    $("#session_comment").val("")
    $.ajax({
        url: "/AddSession",
        method: "POST",
        data: {
            model_id: $("#session_model").val(),
            comment: comment,
        },
        success : function(response){
            if (response.response){
                alert(response.message,"success") ;
            }
            Refresh_Tabs()
            $("#session_add").fadeOut(100);
        }
    })
}

function Close_session(id) {
    $.ajax({
        url: "/CloseSession",
        method: "POST",
        data: {
            model_id: id,
        },
        success : function(response){
            Refresh_Tabs()
        }
    })
}

//prompt
function GetPrompts(id){
    var text = $("#user-input-"+id).val();
    var source_id = $("#user-input-"+id).attr("source_id");
    $.ajax({
        url: '/prompts',
        type: 'POST',
        data: {
            text: text,
        },
        success: function(prompts) {
            $('#Prompt-'+source_id).empty()
            e = 0
            for (i in prompts){
                $('#Prompt-'+source_id).append("\
                <button id='prompt-single-"+ e +"' class='prompt' value='"+ prompts[i] + "' source_id= " + id +" onclick='prompts(`" + e + "`)' >"+ i +"</button>")
                e++
            }
        }
    })
}


function prompts(id){
    var value = $("#prompt-single-"+id).val()
    var source_id = $("#prompt-single-"+id).attr("source_id");
    $('#Prompt-'+source_id).empty()
    $('#user-input-'+source_id).val(""+value)
}

function commit_model(operate){
    id = $("#model_id").val()
    if ($('#model_url').val() == "" || $('#Comment').val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    $("#loading").fadeIn(100)
    $('#'+operate).attr("disabled",true)
    $.ajax({
        url: '/exchange',
        type: 'POST',
        data: {
            state: operate ,
            number: $('#model_id_edit').val() ,
            comment: $('#model_name_edit').val() ,
            type: $('#model_type_edit').val() ,
            url: $('#model_url_edit').val() ,
            APIkey: $('#model_key_edit').val() ,
            LcCompiler: $('#launch_comp_edit').val() ,
            LcUrl: $('#launch_path_edit').val() ,
        },
        success: function(response) {
            if (response.response){
                alert(response.message,"success")
                Refresh_Tabs()
                $("#loading").fadeOut(100)
            }
            else{
                alert(response.message,"danger")
                $("#loading").fadeOut(100)
            }
            Refresh_ModelList()
            $("#model_edit").fadeOut(100);
            $("#model_name_add").val("");
            $("#model_url_add").val("");
        }
    });
}

function launch_model(id){
    var status = $("#online_status_"+id).attr("online")
    if (status == 'online'){
        loading()
        alert('启动中...','success')
        $.ajax({
            url: '/exchange',
            type: 'POST',
            data: {
                state: 'run' ,
                number: id ,
                LcCompiler: $("#online_status_"+id).attr("launch_comp") ,
                LcUrl: $("#online_status_"+id).attr("launch_path") ,
            },
            success: function(response) {
                if (response.response){
                    alert(response.message,"success")
                    Refresh_Tabs()
                    $("#loading").fadeOut(100)
                }
                else{
                    alert(response.message,"danger")
                    $("#loading").fadeOut(100)
                }
                Refresh_ModelList()
                $("#model_edit").fadeOut(100);
                $("#model_name_add").val("");
                $("#model_url_add").val("");
                
            }
        });
    }
    if (status == 'offline'){
        alert('无法启动...','danger')
    }
}

function upload_model_add(){
    if ($('#model_url_add').val() == "" || $('#model_name_add').val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    $.ajax({
        url: '/exchange',
        type: 'POST',
        data: {
            state: "add" ,
            number: $('#model_id_add').val() ,
            comment: $('#model_name_add').val() ,
            type: $('#model_type_add').val() ,
            url: $('#model_url_add').val() ,
            APIkey: $('#model_key_add').val() ,
            LcCompiler: $('#launch_comp_add').val() ,
            LcUrl: $('#launch_path_add').val() ,
        },
        success: function(response){
            if (response.response){
                alert(response.message,"success")
                Refresh_Tabs()
                $("#loading").fadeOut(100)
            }
            else{
                alert(response.message,"danger")
                $("#loading").fadeOut(100)
            }
            Refresh_ModelList()
            $("#model_add").fadeOut(100);
            $("#model_name_add").val("");
            $("#model_url_add").val("");
        }
    })
}

function send_input_stream(id) {
    if ($('#user-input-' + id).val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    $("#loading").fadeIn(100);
    UserInput = $('#user-input-' + id).val()
    $('#user-input-' + id).val("")
    $('#output-' + id).append('<div class="item item-right"><div class="bubble bubble-right">' + UserInput + '</div><div class="avatar"><i class="fa fa-user-circle"></i></div></div>');
    smoothScroll("output-"+id);
    let form = new FormData();
    form.append("userinput",UserInput)
    form.append("modelinput",$('#model-input-' + id).val())
    fetch("/request_models_stream", {
        method: "POST",
        body: form,
    }).then(async (response) => {
        const reader = response.body.getReader();
        $("#loading").fadeOut(100)
        $('#output-' + id).append('<div class="item item-left"><div class="avatar">\
        <i class="fa fa-user-circle-o"></i></div>\
        <div class="bubble bubble-left" id="streaming">\
        </div></div>');
        for await (const chunk of readChunks(reader)) {
            document.getElementById("streaming").innerHTML = new TextDecoder('utf-8').decode(chunk);
            smoothScroll("output-"+id);
        }
        $("#streaming").append('<i onclick="copyContext(-1)" class="fa fa-copy"></i>\
        <i class="fa fa-thumbs-o-up"></i>')
        hljs.highlightAll();
        $("#streaming").attr("id","context_-1");
    });
}
function readChunks(reader) {
    return {
        async *[Symbol.asyncIterator]() {
            let readResult = await reader.read();
            while (!readResult.done) {
                yield readResult.value;
                readResult = await reader.read();
            }
        },
    };
}

$(document).ready(function() {
//send request
$("#add").on('click',function() {
    if ($('#Url-1').val() == "" || $('#Comment-1').val() == ""){
        alert('内容不能为空',"warning");
        return;
    }
    $("#loading").fadeIn(100)
    $('#add').attr("disabled",true)
    $.ajax({
        url: '/exchange',
        type: 'POST',
        data: {
            state: 'add' ,
            number: $('#id').val() ,
            type: $('#Type-1').val() ,
            comment: $('#Comment-1').val() ,
            url: $('#Url-1').val() ,
            APIkey: $('#APIkey-1').val() ,
            LcCompiler: $('#LcCompiler-1').val() ,
            LcUrl: $('#LcUrl-1').val() ,
        },
        success: function(response) {
            if (response.response){
                alert("添加成功","success")
                $("#loading").fadeOut(100)
                $('#add').removeAttr("disabled")
            }
            else{
                alert("添加失败","danger")
                $("#loading").fadeOut(100)
                $('#add').removeAttr("disabled")
            }
            $('#Comment-1').val("")
            $('#Url-1').val("")
            $('#APIkey-1').val("")
            $('#LcCompiler-1').val("")
            $('#LcUrl-1').val("")
            Refresh_ModelList()
        }
    });
});
})

$(document).ready(function() {
    $("#change-adjust").on("click",function(){
        var now = $("body").attr("class")
        if (now == "light"){
            $("body").removeClass("light")
            $("body").addClass("dark")
        }
        if (now == "dark"){
            $("body").removeClass("dark")
            $("body").addClass("light")
        }
    })
})

// Refresh Data
function refresh_website(){
    Refresh_ModelList();
    Refresh_Tabs();
    load_active_widgets();
    load_widgets();
    load_settings();
    hljs.highlightAll();
}

function setup_website(){
    Refresh_Tabs();
    load_widgets();
    Refresh_ModelList();
    load_active_widgets();
    load_settings();
    Get_Version();
    hljs.highlightAll();
}

const smoothScroll = (id) => {
    const element = $(`#${id}`);
    element.stop().animate({
        scrollTop: element.prop("scrollHeight")
    }, 500);
}

function load_history(id) {
    $.ajax({
        url: "/GetHistory",
        method: "POST",
        data: {
            id: id,
        },
        success: function(data){
            $('#output-' + id).empty()
            for (i in data){
                $('#output-' + id).append('<div class="item item-right"><div class="bubble bubble-right" id="high_light_1">' + data[i].UserInput + '</div><div class="avatar"><i class="fa fa-user-circle"></i></div></div>');
                $('#output-' + id).append('<div class="item item-left"><div class="avatar"><i class="fa fa-user-circle-o"></i></div><div class="bubble bubble-left"\
                id="context_' + data[i].id + '">' + data[i].response + '\
                <i onclick="copyContext(`' + data[i].id + '`)" class="fa fa-copy"></i>\
                <i class="fa fa-thumbs-o-up"></i>\
                </div></div>');
                smoothScroll("output-"+id);
                hljs.highlightAll();
                }
        }
    })
}

function copyContext(id){
    message = $("#context_"+id).text();
    copyToClip(message);
}

function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        alert("复制成功","success");
    } else{
        alert(message);
    }
}

function Refresh_ModelList(){
    $.ajax({
        url: '/GetModelList',
        method: "POST",
        success: function(data){
            $('#model_container_table').empty()
            for (i in data){
                $('#model_container_table').append(
                '<li class="ele" draggable="true" id="'+ data[i].id +'">\
                    <div style="width: 70%;float:left;">\
                        <span><div class="model_title">'+ data[i].name +'</div></span>\
                        <span><div class="model_subtitle">'+ data[i].url +'</div></span>\
                    </div>\
                    <i class="fa fa-info"\
                    id="model_'+ data[i].id +'" \
                    model_type="'+ data[i].type +'"  \
                    model_name="'+ data[i].name +'" \
                    model_url="'+ data[i].url +'" \
                    model_key="'+ data[i].api_key + '"\
                    model_launch_comp="'+ data[i].launch_compiler +'"\
                    model_launch_path="'+ data[i].launch_path +'"\
                    model_available="' + data[i].available + '" \
                    onclick="show_model_edit('+ data[i].id +')"></i>\
                    <i id="online_status_'+ data[i].id +'" \
                    model="'+ data[i].id +'" \
                    onclick="launch_model('+ data[i].id +')" \
                    class="fa fa-circle-o active_status" \
                    launch_comp="'+ data[i].launch_compiler +'"\
                    launch_path="'+ data[i].launch_path +'"\
                    online=""></i>\
                    </li>'
                )
                if (data[i].launch_path != '/' && data[i].launch_path != ''){
                    $('#online_status_'+data[i].id).addClass("fa-circle")
                    $('#online_status_'+data[i].id).removeClass("fa-circle-o")
                    $('#online_status_'+data[i].id).addClass("active_status")
                    $('#online_status_'+data[i].id).removeClass("deactive_status")
                    $('#online_status_'+data[i].id).attr("online","online")
                }
                else{
                    $('#online_status_'+data[i].id).removeClass("active_status")
                    $('#online_status_'+data[i].id).addClass("deactive_status")
                    $('#online_status_'+data[i].id).attr("online","offline")
                }

            }
        }
    })
}

function Refresh_Tabs(){ 
    $.ajax({
        url: "/GetActiveModels",
        method: "POST",
        success(data){
            $("#tabs").empty()
            $("#Contents").empty()
            var count = 1
            for (i in data){
                if (count == 1){
                $("#tabs").append('<li draggable="true" class="li current" id="Tab'+ data[i].id +'" value='+ data[i].id +' onclick="change_tab('+ data[i].id +')">\
                <span>'+ data[i].comment +'</span>\
                <i class="fa fa-close close" onclick="Close_session('+ data[i].id +')"></i>\
                </li>')
                if (data[i].model_type == "OpenAI" || data[i].model_type == "API"){
                    $("#Contents").append('\
                    <div class="dialogbox_container" id='+ data[i].id +'>\
                        <div class="content" id="output-'+ data[i].id +'"></div>\
                        <div class="prompt_container" id="Prompt-'+ data[i].id +'">\
                        </div>\
                        <div class="input-area" id="input-area-'+ data[i].id +'">\
                            </br>\
                            <div class="txtb">\
                                <textarea class="userInputArea" placeholder="输入内容" id="user-input-'+ data[i].id +'" source_id="'+ data[i].id +'" onInput="GetPrompts('+ data[i].id +');focus_input('+ data[i].id +')"\
                                 onclick=""></textarea>\
                            </div>\
                            <input id="model-input-'+ data[i].id +'" type="hidden" value='+ data[i].id +' />\
                            <div class="button-area">\
                                <button type="submit" class="SendInput" id="SendInput" value="'+ data[i].id +'" onclick="send_input_stream(`'+ data[i].id +'`)"><i class="fa fa-send"></i></button>\
                            </div>\
                        </div>\
                    </div>')
                }
                if (data[i].model_type == "WebUI"){
                    $("#Contents").append('\
                    <div id='+ data[i].id +'">\
                        <iframe allow="autoplay *; encrypted-media *;" src="'+ data[i].model_url +'"></iframe>\
                    </div>')
                }
                count = 0
                }
                else{
                    $("#tabs").append('<li draggable="true" class="li" id="Tab'+ data[i].id +'" value='+ data[i].id +' onclick="change_tab('+ data[i].id +')">\
                    <span>'+ data[i].comment +'</span>\
                    <i class="fa fa-close close" onclick="Close_session('+ data[i].id +')"></i>\
                    </li>')
                    if (data[i].model_type == "OpenAI" || data[i].model_type == "API"){
                        $("#Contents").append('\
                        <div class="dialogbox_container" id='+ data[i].id +' style="display: none;">\
                            <div class="content" id="output-'+ data[i].id +'"></div>\
                            <div class="prompt_container" id="Prompt-'+ data[i].id +'">\
                            </div>\
                            <div class="input-area" id="input-area-'+ data[i].id +'">\
                                </br>\
                                <div class="txtb">\
                                    <textarea class="userInputArea" placeholder="输入内容" id="user-input-'+ data[i].id +'" source_id="'+ data[i].id +'" onInput="GetPrompts('+ data[i].id +');focus_input('+ data[i].id +')"></textarea>\
                                </div>\
                                <input id="model-input-'+ data[i].id +'" type="hidden" value='+ data[i].id +' />\
                                <div class="button-area">\
                                <button type="submit" id="SendInput" value="'+ data[i].id +'" onclick="send_input_stream(`'+ data[i].id +'`)"><i class="fa fa-send"></i></button>\
                                </div>\
                            </div>\
                        </div>')
                    }
                    if (data[i].model_type == "WebUI"){
                        $("#Contents").append('\
                        <div id='+ data[i].id +' style="display: none;" class="iframe_container">\
                            <iframe allow="autoplay *; encrypted-media *;" src="'+ data[i].model_url +'"></iframe>\
                        </div>')
                    }
                }
                load_history(data[i].id)
            }
            $("#session_model").empty()
            $.ajax({
                url: "/GetModelForSession",
                method: "POST",
                success: function(data){
                    var count = 1
                    for (i in data.ModelList) {
                        if (count == 1){
                            $("#session_model").append("<option selected value="+ data.ModelDict[i] +">"+ data.ModelList[i]+"</option>")
                            count = 0
                        }
                        else{
                            $("#session_model").append("<option value="+ data.ModelDict[i] +">"+ data.ModelList[i]+"</option>")
                        }
                    }
                }
            })
            $("#tabs").append('<li class="li" id="TabAdd" value="Add" onclick="show_session_add()">\
            <i class="fa fa-plus close"></i>\
            </li>')
            load_active_widgets()
        }
    })
}

function load_active_widgets(){
    $.ajax({
        url: "/GetActiveWidgets",
        method: "POST",
        success: function(data){
            $("#widgets_container_live").empty()
            for (i in data){
                $("#widgets_container_live").append('\
                <div id="widgets_window_'+ data[i].id +'" class="widgets_contentbox '+ data[i].size +'">\
                    <div class="widgets_bar">\
                        <i class="fa fa-minus" onclick="change_widgets('+ data[i].id +',`small`)"></i>\
                        <i class="fa fa-window-maximize" onclick="change_widgets('+ data[i].id +',`medium`)"></i>\
                        <i class="fa fa-plus" onclick="change_widgets('+ data[i].id +',`large`)"></i>\
                    </div>\
                    <div style="height: 90%;">\
                        <iframe src='+ data[i].widgets_url +' frameborder=0></iframe>\
                    </div>\
                </div>\
                ')
            }
        }
    })
}

function change_widgets(id,target){
    $("#widgets_window_"+id).removeClass("medium")
    $("#widgets_window_"+id).removeClass("large")
    $("#widgets_window_"+id).removeClass("small")
    $("#widgets_window_"+id).addClass(target)
}

function change_widgets_pre(id,target){
    $("#"+id).removeClass("medium")
    $("#"+id).removeClass("large")
    $("#"+id).removeClass("small")
    $("#"+id+"_button_small").removeClass("active")
    $("#"+id+"_button_medium").removeClass("active")
    $("#"+id+"_button_large").removeClass("active")
    $("#"+id+"_button_"+target).addClass("active")
    $("#"+id+"_val").val(target)
    $("#"+id).addClass(target)
}

function preview_widgets(pre,input){
    input_url = $("#"+input).val()
    $("#"+pre).attr("src",input_url)
}

function load_widgets(){
    $.ajax({
        url: "/GetWidgets",
        method: "POST",
        success: function(data){
            $("#widgets_container").empty()
            for (i in data){
                $("#widgets_container").append('\
                <li class="ele" draggable="true" id="'+ data[i].id +'">\
                    <div style="width: 70%;float:left;">\
                        <span><div class="widgets_title">'+ data[i].widgets_name +'</div></span>\
                        <span><div class="widgets_subtitle">'+ data[i].widgets_url +'</div></span>\
                    </div>\
                    <i class="fa fa-bars"></i>\
                    <i class="fa fa-info"\
                    id="widgets_'+ data[i].id +'"\
                    widgets_name="'+ data[i].widgets_name +'"\
                    widgets_url="'+ data[i].widgets_url +'"\
                    widgets_size="'+ data[i].size +'"\
                    widgets_available="' + data[i].available + '"\
                    onclick="show_widgets_edit('+ data[i].id +')"\
                    ></i>\
                </li>\
                ')
            }
        }
    })
}

function switch_load(id){
    var now_value = $("#"+id).val()
    if (now_value == "True" || now_value == "true"){
        $("#"+id).val("False")
    }
    if (now_value == "False" || now_value == "false"){
        $("#"+id).val("True")
    }
}

function save_settings(){
    $.ajax({
        url: "/EditSetting",
        method : "POST",
        data: {
            Theme : $("body").attr("class"),
            Language : $("#Language").val(),
            ActiveExamine : $("#ActiveExamine").val(),
            Timeout : $("#Timeout").val(),
            Host : $("#Host").val(),
            Port : $("#Port").val(),
            Develop : $("#Develop").val(),
        },
    success: function(data){
        if (data.response == true){
            alert("保存成功","success")
            alert("部分更改将在重启程序后生效","warning")
            load_settings()
        }
        setup_website()
    }
    })
}

function load_settings(){
    $.ajax({
        url: "/GetSetting",
        method : "POST",
    success: function(data){
        if (data.response == "true"){
            var now = $("body").attr("class")
            if (now == data.Theme){}
            else{
                $("body").removeClass(now)
                $("body").addClass(data.Theme)
            }
            $("#"+data.Language).attr("selected",true)
            $("#ActiveExamine").val(data.ActiveExamine)
            if (data.ActiveExamine == "True"){
                $("#ActiveExamine_Checkbox").attr("checked",true)
            }
            else{
                $("#ActiveExamine_Checkbox").removeAttr("checked")
            }
            if (data.Develop == "True"){
                $("#Develop_Checkbox").attr("checked",true)
            }
            else{
                $("#Develop_Checkbox").removeAttr("checked")
            }
            $("#Language").empty()
            for (j in data.Languages){
                if (data.Languages[j] == data.Language){
                    $("#Language").append("\
                    <option id="+ data.Languages[j] +" selected>"+ data.Languages[j] +"</option>\
                    ")
                }
                else {
                    $("#Language").append("\
                    <option id="+ data.Languages[j] +">"+ data.Languages[j] +"</option>\
                    ")
                }
            }
            $("#ActiveExamine").val(data.ActiveExamine)
            $("#Develop").val(data.Develop)
            $("#Timeout").val(data.Timeout)
            $("#Host").val(data.Host)
            $("#Port").val(data.Port)
            $("Develop").val(data.Develop)
        }
    }
    })
}

function Get_Version(){
    $.ajax({
        url: "/GetVersion",
        method: "POST",
        success : function(data){
            $("#Version").empty();
            $("#Version").text(data.version);
            $("#IconBarVersion").empty();
            $("#IconBarVersion").text("Version "+data.version);
        }
    })
}

//CommitModel
function loading(){
    $("#loading").fadeIn(100)
    setTimeout(function(){ $("#loading").fadeOut(100) },1000)
}

// 获取元素在父元素中的index
function _index(el) {
    var index = 0
    if (!el || !el.parentNode) {
        return -1
    }
    // previousElementSibling：上一个兄弟元素
    while (el && (el = el.previousElementSibling)) {
        index++
    }
    return index
}
// 触发动画
function _animate(prevRect, target) {
    var ms = 300
    if (ms) {
        var currentRect = target.getBoundingClientRect()
        if (prevRect.nodeType === 1) {
            prevRect = prevRect.getBoundingClientRect()
        }
        _css(target, 'transition', 'none')
        _css(target, 'transform', 'translate3d(' +
            (prevRect.left - currentRect.left) + 'px,' +
            (prevRect.top - currentRect.top) + 'px,0)'
        );

        target.offsetWidth; // 触发重绘

        _css(target, 'transition', 'all ' + ms + 'ms');
        _css(target, 'transform', 'translate3d(0,0,0)');
        // 事件到了之后把transition和transform清空
        clearTimeout(target.animated);
        target.animated = setTimeout(function() {
            _css(target, 'transition', '');
            _css(target, 'transform', '');
            target.animated = false;
        }, ms);
    }
}

// 给元素添加style
function _css(el, prop, val) {
    var style = el && el.style
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                val = document.defaultView.getComputedStyle(el, '')
            } else if (el.currentStyle) {
                val = el.currentStyle
            }
            return prop === void 0 ? val : val[prop]
        } else {
            if (!(prop in style)) {
                prop = '-webkit-' + prop;
            }
            style[prop] = val + (typeof val === 'string' ? '' : 'px')
        }
    }
}

window.onload = function() {

  }