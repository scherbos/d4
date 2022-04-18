TODO:

- create common components (button, heading, navlink, input) | DONE
- create feature components (birds form, chart view wrapper) | DONE
- create 2 pages (input and dashboard) | DONE
- create api service | DONE
- create in memory db | DONE
- use api service on both pages | DONE

Usually I would use emotion.js for styling + css variables, but it would take a lot more time. If I had time I would also make different states for chart feature component (loading/error).

I didn't really understand why d4 have different roles (which in itself implies that each role have different set of permissions) + you have ability to create a token with different permissions.

So regarding the question of multi-tenant authentication. I would either create a predefined set of roles with different permissions OR I would give an ability to d4 users make custom roles with different sets of permissions.
