
var current = 0;

$(document).ready(function (argument) {



	//$('.mm-item-open-text').niceScroll({touchbehavior:true,cursorcolor:"#fff",cursoropacitymax:0.7,cursorwidth:11,cursorborder:"1px solid #2848BE",cursorborderradius:"5px",background:"#efefef",autohidemode:"none"}); // MAC like scrollbar

	$('.mm-twitter').click(function() {
        window.open('https://twitter.com/share?url=http://aftenbladet.no/multimedia/kvinnerirogaland&text='+encodeURIComponent('Vi presenterer 26 kvinner, ei fra hver kommune i Rogaland')+'&via=StvAftenblad','twitsharer','toolbar=0,status=0,width=626,height=436');
      });

      $('.mm-facebook').click(function() {
        window.open('http://www.facebook.com/sharer/sharer.php?m2w&s=100&p[title]='+encodeURIComponent('Kvinner i Rogaland')+'&p[url]=http://aftenbladet.no/multimedia/kvinnerirogaland&p[summary]='+encodeURIComponent('Vi presenterer 26 kvinner, ei fra hver kommune i Rogaland. ')+'&p[images][0]='+encodeURIComponent('http://lisa1.aftenbladet.no/spesial/kvinnerirogaland/gfx/facebook_thumb.png'),'twitsharer','toolbar=0,status=0,width=626,height=436');
      });


	$('.btn-next').click(function(){
		//var dataId = $('.mm-item-open-wrap').attr('data-current');
		$('.mm-item-open-wrap').css('visibility','hidden');
		$('.mm-item-open-wrap').removeClass('mm-delay').removeClass('mm-item-open-wrap-open');
	
		var html = "";
		var nextId = parseInt($('.mm-thumbs li.mm-thumb-active').attr('data-id')) + 1;
		if(nextId == 26){nextId = 0}

		html = getContent(nextId);

		$('.mm-thumbs li').removeClass('mm-thumb-active');
		$('.mm-thumbs li[data-id="'+nextId+'"]').addClass('mm-thumb-active');		


		$('.mm-item-open-cite').html(html[1]);
		$('.mm-item-open-text').html(html[0]).scrollTop(0);
			$('.mm-video-wrapper').html(html[2] + '<script src="http://lisa1.aftenbladet.no/tools/escenic-js-plugins/feature-videoplayer/mm-sa-feature-videoplayer.js"></script>')

		setTimeout(function(){

			$('.mm-item-open-wrap').addClass('mm-item-open-wrap-open').css('visibility','visible');

		},300);

	});

	$('.btn-prev').click(function(){

		$('.mm-item-open-wrap').css('visibility','hidden');
		$('.mm-item-open-wrap').removeClass('mm-delay').removeClass('mm-item-open-wrap-open');
		var html = "";
		var prevId = parseInt($('.mm-thumbs li.mm-thumb-active').attr('data-id')) - 1;
		if(prevId == -1){prevId = 25}
		
		html = getContent(prevId);

		


		$('.mm-thumbs li').removeClass('mm-thumb-active');
		$('.mm-thumbs li[data-id="'+prevId+'"]').addClass('mm-thumb-active');
		$('.mm-item-open-cite').html(html[1]);
		$('.mm-item-open-text').html(html[0]).scrollTop(0);
			$('.mm-video-wrapper').html(html[2] + '<script src="http://lisa1.aftenbladet.no/tools/escenic-js-plugins/feature-videoplayer/mm-sa-feature-videoplayer.js"></script>')

				setTimeout(function(){

			$('.mm-item-open-wrap').addClass('mm-item-open-wrap-open').css('visibility','visible');

		},300);

	});

	$('.mm-thumbs li').click(function(){

		$('.mm-item-open-wrap').css('visibility','hidden');
		$('.mm-item-open-wrap').removeClass('mm-delay').removeClass('mm-item-open-wrap-open');
		var dataId = $(this).attr('data-id');
		var html = "";
		current = parseInt(dataId);

		$('.mm-thumbs li').removeClass('mm-thumb-active')
		$('.mm-thumbs li[data-id="'+dataId+'"]').addClass('mm-thumb-active')

		html = getContent(dataId);


		$('.mm-item-open-wrap').scrollTop(0);
		$('.mm-item-open-text').html(html[0]).scrollTop(0);
		$('.mm-item-open-cite').html(html[1]);
			$('.mm-video-wrapper').html(html[2] + '<script src="http://lisa1.aftenbladet.no/tools/escenic-js-plugins/feature-videoplayer/mm-sa-feature-videoplayer.js"></script>');

				setTimeout(function(){

			$('.mm-item-open-wrap').addClass('mm-item-open-wrap-open').css('visibility','visible');

		},300);

	});
	
	$('.mm-item:not("#mm-jumbo-right, mm-jumbo-left")').click(function(){

		var dataId = $(this).attr('data-id');
	

		$('.mm-thumbs li').removeClass('mm-thumb-active')
		$('.mm-thumbs li[data-id="'+dataId+'"]').addClass('mm-thumb-active')

		html = getContent(dataId);


		$('.mm-item-open-cite').html(html[1]);
		$('.mm-item-open-text').html(html[0]).scrollTop(0);
		$('.mm-item-open-wrap').scrollTop(0);
		$('.mm-video-wrapper').html(html[2] + '<script src="http://lisa1.aftenbladet.no/tools/escenic-js-plugins/feature-videoplayer/mm-sa-feature-videoplayer.js"></script>')
		$('.mm-item-open-wrap').css('visibility','visible');
		$('#bt-menu').addClass('bt-menu-open');
		$('.mm-item-open-wrap').addClass('mm-delay').addClass('mm-item-open-wrap-open').attr('data-current',dataId);
		//$('.mm-item-open-wrap').css('opacity','1');
	});




	$('.bt-menu-trigger').click(function(){
		$('.mm-item-open-wrap').css('visibility','hidden');
		$('.mm-item-open-wrap').removeClass('mm-delay mm-item-open-wrap-open');

		setTimeout(function(){$('#bt-menu').removeClass('bt-menu-open');},0);
		//$('.mm-item-open-wrap').css('opacity','0');
	});


	var parameter = getUrlVars();

	if (parameter.show){
			
				switch(parameter.show){
					case "lill-marit-hafsø-solstad":$('.lillmari').click();break;
					case "grethe-spanne-ledaal":$('.grethe').click();break;
					case "vibeke-thomassen":$('.vibeke').click();break;
					case "katharina-fowler":$('.katharina').click();break;
					case "katrine-andersen":$('.katrine').click();break;
					case "june-fossmark":$('.june').click();break;
					case "bergljot-viste":$('.bergljot').click();break;
					case "stephanie-birkeland":$('.stephanie').click();break;
					case "sigrid-hermine-skeiseide":$('.sigrid').click();break;
					case "sivanette-vadla":$('.sivanette').click();break;
					case "vibeke-petersen":$('.vibekep').click();break;
					case "birgitte-sæter":$('.birgitte').click();break;
					case "kelly-smith":$('.kelly').click();break;
					case "unni-marie-lien":$('.unni').click();break;
					case "lillann-haaland":$('.lillann').click();break;
					case "oline-varhaug":$('.oline').click();break;
					case "june-pedersen":$('.junep').click();break;
					case "anette-vaga":$('.anette').click();break;
					case "kristine-osland":$('.kristine').click();break;
					case "tvillinger":$('.tvillinger').click();break;
					case "alice-darby":$('.alice').click();break;
					case "sivelise-seland":$('.sivelise').click();break;
				}
	}

});

function getContent(id){
		var html = [];

		$.each(json, function(i,item){
			if(id == item.id){
				html[0] = "<h1>" + item.name + "</h1>";
				html[0] += "<strong>" + item.intro + "</strong>";
				html[0] += item.html + "<div class='byline'>Lyd og bilder:" + ' ' + item.byline;
				//html[1] = '<span><span class="mm-quote-start"></span>' + item.cite + '<span class="mm-quote-end"></span></span>';
				html[1] = '<div class="county"><img class="responsive" src="http://lisa.aftenbladet.no/html/kvinnerirogaland/gfx/kart/' + item.map + '.png"></div><div class="mm-cite">' + item.cite + '<br><span class="mm-cite-by">'+item.name+' '+' - <span class="county-pink">'+item.county+'</span></span></div>';
				html[2] = '<div data-apvideoid="'+item.video+'" data-play-color="rgb(147, 104, 32)"></div>';
			}
		});

		return html;
}


function getUrlVars() {

	var vars = {};

	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {

	vars[key] = value;

	});

	return vars;

}
