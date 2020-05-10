function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(56.0156444,37.8820703),
		scrollwheel: false
	});

	var iconBase = 'img/'; //папка с картинками

	var icons = { //разные картинки на типы объектов
		school: { icon: iconBase + 'school.svg' },
		childgarden: {icon: iconBase + 'child_garden.svg'},
		shop: {icon: iconBase + 'shop.svg'},
		food: {icon: iconBase + 'food.svg'},
		entertainment: {icon: iconBase + 'star.svg'},
		sport: {icon: iconBase + 'sport.svg'},
		hospital: { icon: iconBase + 'hospital.svg' }
	};

	var features = [
		{
			position: new google.maps.LatLng(56.0156444,37.8820703),
			type: 'shop',
			html: '<div>shop</div>'
		}, {
			position: new google.maps.LatLng(56.018672,37.8842651),
			type: 'shop',
			html: '<div>shop</div>'
		}, {
			position: new google.maps.LatLng(56.0000524,37.8785624),
			type: 'shop',
			html: '<div>shop</div>'
		},
		{
			position: new google.maps.LatLng(56.0188087,37.8345055),
			type: 'hospital'
		}, {
			position: new google.maps.LatLng(56.1653193,37.9523738),
			type: 'hospital'
		}, {
			position: new google.maps.LatLng(56.1008631,37.7344853),
			type: 'hospital'
		},
		{
			position: new google.maps.LatLng(56.1639407,37.9507738),
			type: 'childgarden'
		}, {
			position: new google.maps.LatLng(56.09296,37.9054253),
			type: 'childgarden'
		}, {
			position: new google.maps.LatLng(55.9137638,37.6566002),
			type: 'childgarden'
		},
		{
			position: new google.maps.LatLng(55.7946913,37.453431),
			type: 'food'
		}, {
			position: new google.maps.LatLng(56.0784273,37.9089573),
			type: 'food'
		}, {
			position: new google.maps.LatLng(56.0171772,37.8838482),
			type: 'food'
		},
		{
			position: new google.maps.LatLng(56.2764349,37.4783779),
			type: 'entertainment'
		}, {
			position: new google.maps.LatLng(56.2763952,37.478244),
			type: 'entertainment'
		}, {
			position: new google.maps.LatLng(56.178252,37.9005433),
			type: 'entertainment'
		},
		{
			position: new google.maps.LatLng(56.212138,37.7783084),
			type: 'sport'
		}, {
			position: new google.maps.LatLng(56.178252,37.9005433),
			type: 'sport'
		}, {
			position: new google.maps.LatLng(56.1791842,37.9224095),
			type: 'sport'
		}
	];

//для всплывайки
	var contentString = '';
	var infowindow = new google.maps.InfoWindow({ content: contentString });

	//инициализируем маркеты
	features.forEach(function(feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			title: feature.title,
			html: feature.html,
			animation: google.maps.Animation.DROP,
			map: map
		});
	//передаем во всплывайку текст маркера
		marker.addListener('click', function() {
			infowindow.setContent(this.title + this.html);
			infowindow.open(map, marker);
		});
	});
}