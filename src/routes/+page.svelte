<script lang="ts">
    import { onMount } from 'svelte';
    import { PUBLIC_APPLICATION_ID, PUBLIC_REST_KEY } from '$env/static/public';

    // Logging environment variables to ensure they are loaded
    console.log('Application ID:', PUBLIC_APPLICATION_ID);  
    console.log('REST API Key:', PUBLIC_REST_KEY);  

    let events = [];

    const fetchEvents = async () => {
        console.log('Attempting fetch request to Back4App');

        try {
            const response = await fetch('https://parseapi.back4app.com/classes/Events', {
                method: 'GET',
                headers: {
                    'X-Parse-Application-Id': PUBLIC_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PUBLIC_REST_KEY,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Fetch response status:', response.status); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, body: ${await response.text()}`);
            }

            const data = await response.json();
            console.log('Fetched events:', data.results);
            events = data.results;
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    };

    onMount(() => {
        fetchEvents();
    });
</script>

<div>
    {#if events.length === 0}
        <p>No data found or fetching data...</p>
    {/if}
    {#each events as event}
        <div>
            <h5>{event.name}</h5>
            <p>{event.description}</p>
        </div>
    {/each}  
</div>

    onMount(() => {
        fetchEvents();
    });
</script>

<div>
    {#if events.length === 0}
        <p>No data found or fetching data...</p>
    {/if}
    {#each events as event}
        <div>
            <h5>{event.name}</h5>
            <p>{event.description}</p>
        </div>
    {/each}  
</div>