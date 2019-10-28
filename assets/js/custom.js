(function($) {
	var slotContainer = $('#slots');
	var starContainer = $("#star");
	var txtGratitude = starContainer.find('.gratude-txt');
	var bgs = ["#FFBA36", "#54BA57", "#C59BDF", "#C5796C", "#0AB6BC", "#A4005D", "#F16F24"];
	var ISMNavigtorLinks = {
		star1: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/motivation/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-1/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-1/#full_journal_for_this_step"
			}
		},
		star2: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/gratitude/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-2/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-2/#full_journal_for_this_step"
			}
		},
		star3: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/transformation/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-3/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-3/#full_journal_for_this_step"
			}
		},
		star4: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/love-compassion/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-4/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-4/#full_journal_for_this_step"
			}
		},
		star5: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/mindfulness/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-5/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-5/#full_journal_for_this_step"
			}
		},
		star6: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/wisdom/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-6/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-6/#full_journal_for_this_step"
			}
		},
		star7: {
			slot1: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-my-sources/"
			},
			slot2: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/ism-search/"
			},
			slot3: {
				link1: "https://spiritualpaths.net/spf-lesson/spiritual-styles-intro/",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/style/spiritual-styles-profile-tool/?sclass=ISM",
				link3: "https://spiritualpaths.net/lesson-tools/meditationc/style/my-style-history/"
			},
			slot4: {
				link1: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#no_background_sound",
				link2: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#flute_background",
				link3: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#waves_background",
				link4: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#music_background",
				link5: "https://spiritualpaths.net/spf-lesson/meditationc/getting-started/guided-meditations/#guided_song_verses"
			},
			slot5: {
				link1: "https://spiritualpaths.net/interspiritual-mentoring/",
				link2: "https://spiritualpaths.net/interspiritual-mentoring/ethical-guidelines/",
				link3: "https://spiritualpaths.net/my-account/#mentor-shop"
			},
			slot6: {
				link1: "https://spiritualpaths.net/discussion/meditationc/service/",
				link2: "https://spiritualpaths.net/discussion/meditationc/find-practice-partner/"
			},
			slot7: {
				link1: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-7/#summary_for_this_step",
				link2: "https://spiritualpaths.net/lesson-tools/meditationc/my-journals/ism-worksheet-step-7/#full_journal_for_this_step"
			}
		}
	};

	console.log(`starContainer`,starContainer);


	function slugify(string) {
		return string
			.toString()
			.trim()
			.toLowerCase()
			.replace(/\s+/g, "_")
			.replace(/[^\w\-]+/g, "")
			.replace(/\-\-+/g, "_")
			.replace(/^-+/, "")
			.replace(/-+$/, "");
	}

	function makeURL(starId, slotId) {

		var links = $('.filters .slot-tables .slot-table-' + slotId + " a");
		var star = 'star' + starId;
		var slot = 'slot' + slotId;

		links.each(function(linkId) {
			var link = 'link' + (linkId + 1);
			var url = ISMNavigtorLinks[star][slot][link];

			$(this).attr('href', url);
			$(this).attr('target', '_blank');
			// $(this).attr('href', ism_navigator_var.home_url + "/star-"+starId+"/slot-"+slotId+"/"+ slugify($(this).text()) );
		});

	}

	console.log(`starContainer.find('[id*="star-"]')`,starContainer.find('[id*="star-"]'));

	starContainer.find('[id*="star-"]').click(function() {
		console.log(`$(this)`,$(this));
		$(this).addClass('active').siblings('[id*="star-"]').removeClass('active');
		var activeStarId = this.id.replace('star-', '');
	});

	starContainer.find('.gratude').mouseover(function() {
		txtGratitude.css({
			fill: "#ffffff"
		});
	}).mouseleave(function() {
		txtGratitude.css({
			fill: "#000000"
		});
	}).click(function() {
		txtGratitude.addClass('active').siblings('[id*="star-"]').removeClass('active');
	});


	slotContainer.find('.slot').click(function() {

		slotContainer.find('.slot .hidden-text').css({
			transform: ""
		});
		$(this).addClass('active').siblings('.slot').removeClass('active');

		var activeStar = starContainer.find('.active');
		var slotId = this.id.replace('slot', '');
		var isStartSelected = (activeStar.length > 0);

		// if(activeStar.length > 0) {
		if (isStartSelected ||
			(
				slotId == '3' // my profile
				||
				slotId == '4' // guided meditation
				||
				slotId == '5' // my mentor
			)
		) {

			$('.filters .slot-tables .slot-table-' + slotId).slideDown().siblings().slideUp();

			var starId = (!isStartSelected) ? '1' : activeStar[0].id.replace('star-', '');
			var BGColorStop = $("#SLOT_BG_" + slotId + "_ [offset=\"0\"]");

			var colorIndex = parseInt(starId) - 1;
			var colorCode = bgs[colorIndex];
			BGColorStop.attr('style', "stop-color:" + colorCode);

			$(this).siblings('.slot').each(function() {

				var id = this.id.replace('slot', '');
				$("#SLOT_BG_" + id + "_ [offset=\"0\"]").attr('style', "stop-color:#666666;");
			});

			makeURL(starId, slotId);

		} else {
			alert('Please select one of the 7 step meditations first.');
		}

	});

	slotContainer.find('#slot1').click(function() {

		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		}
	});
	slotContainer.find('#slot2').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		}
	});
	slotContainer.find('#slot3').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		}
	});
	slotContainer.find('#slot4').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		}
	});
	slotContainer.find('#slot5').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		}
	});
	slotContainer.find('#slot6').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		}
	});
	slotContainer.find('#slot7').click(function() {
		if (starContainer.find('#star-1').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(257.14deg)'
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});

		} else if (starContainer.find('#star-2').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(0deg)'
			});
		} else if (starContainer.find('#star-3').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(102.86deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
		} else if (starContainer.find('#star-4').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(205.712deg)'
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-5').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(308.568deg)'
			});
			slotContainer.find('#slot4 .hidden-text').css({
				transform: "matrix(-0.27, 0.97, -0.97, -0.2, 240, 285)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		} else if (starContainer.find('#star-6').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(51.428deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.62, -0.78, 0.78, -0.62, 262, 442)"
			});
		} else if (starContainer.find('#star-7').hasClass('active')) {
			slotContainer.css({
				'transform': 'rotate(154.28deg)'
			});
			slotContainer.find('#slot1 .hidden-text').css({
				transform: "matrix(-0.22, -0.97, 0.9, -0.2, 505, 320)"
			});
			slotContainer.find('#slot2 .hidden-text').css({
				transform: "matrix(-0.9, -0.43, 0.43, -0.9, 440, 219)"
			});
			slotContainer.find('#slot3 .hidden-text').css({
				transform: "matrix(-0.89, 0.43, -0.43, -0.89, 320, 216)"
			});
			slotContainer.find('#slot5 .hidden-text').css({
				transform: "matrix(-0.6, -0.78, 0.78, -0.62, 262, 440)"
			});
			slotContainer.find('#slot6 .hidden-text').css({
				transform: "matrix(-0.99, 0, 0, -0.99, 382, 489)"
			});
			slotContainer.find('#slot7 .hidden-text').css({
				transform: "matrix(-0.6, 0.78, -0.78, -0.62, 492, 425)"
			});
		}
	});

	$(document).ready(function() {

	}); // end of ready function 

}(jQuery));