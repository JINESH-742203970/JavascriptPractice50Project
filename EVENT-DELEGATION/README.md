<!--  The process which define in which order event will execute is known as event propogation-->
<!-- Event propgation is two type -->
<!-- Event-bubbling:In thsi the event will execute from bottom to top >It is default behaviour of event-propogation-->
<!-- We can change the event-propogation direction.we can do event-propogation from top to bottom .This is known as event-capturing -->
<!-- There are some events which will not perform event bubbling (focus,blur) -->
<!-- There is a way to stop event bubbling(e.stopPropogation()) -->

<!-- event.target:it give the information of tag where event start to originates -->
<!-- event.current.target:It will give the information of tag on which event is currently executing-->
<!-- this.target:event.currentTarget -->

<!-- {capture:true};To Perform event capturing -->
<!-- eventCapturing/eventTrickling -->


<!-- In EventDelegation we are adding events on parent element rather than descendant element -->

<!-- event.target.closest("SPAN"):It will check that it is the closest node of span tag  -->