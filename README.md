Architecture explanation

The app is structured into screens, services, context, and components to enforce separation of concerns. Screens focus on rendering, services handle API calls, context manages global state, and components are purely presentational. This clean architecture ensures scalability, easier debugging, and consistent state handling across the app. Loading, error, empty, and success states are implemented centrally, making the UI predictable and reliable.

Explanation of how Context API manages global state

The Context API provides a single source of truth for product data. It fetches products once, stores them globally, and exposes state (products, loading, error) to all components. This eliminates prop drilling, prevents duplicate API calls, and ensures the UI automatically reacts to state changes.

Explanation of why Axios instance is used

A reusable Axios instance (api.js) is configured with a base URL and defaults. This avoids repeating API URLs in screens, keeps configuration centralized, and supports advanced features like interceptors. It makes the code cleaner, more maintainable, and easier to extend when adding authentication or logging.
