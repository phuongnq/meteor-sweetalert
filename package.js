Package.describe({
    name: 'dfs:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '1.1.3',
    git: 'https://github.com/phuongnq/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'dist/sweetalert.css',
        'dist/sweetalert.min.js'
    ], ['client']);

    if(api.export){

    }
})
