<script>
	import FeedBackList from "./components/FeedBackList.svelte";
	import FeedBackStats from "./components/FeedBackStats.svelte";
	import FeedBackForm from "./components/FeedBackForm.svelte";
	import {FeedbackStore} from "./stores.js";

	// let feedback = [];
	// FeedbackStore.subscribe((data) => feedback = data);

	// let feedback = $FeedbackStore;
	/* 
	const deleteFeedback = (e) => {
    const itemId = e.detail;
		feedback = feedback.filter((item) => item.id != itemId);
  } */

	const addFeedback = (newFeedback) => {

		
	}
</script>

<main class="container">
	<FeedBackForm/>
	<FeedBackStats/>
	<FeedBackList />
	<!-- on:delete-feedback={deleteFeedback} -->

</main>

<style>

</style>