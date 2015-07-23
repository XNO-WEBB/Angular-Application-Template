app.controller("postsController", function($scope)
{
    var posts = this;

    posts.list = [];

    io.socket.get('/posts', function (resData, sw) {

        for (var key in resData) 
        {
            posts.list.push(resData[key]);
        };

        $scope.$digest();
    });

    io.socket.on('posts', function onServerSentEvent (msg)
    {
        console.log(msg.id);
        console.log(msg.data.title);
        console.log(posts.list[msg.id - 1]);
        if ( msg.verb == 'updated' )
        {
            posts.list[msg.id - 1].title = msg.data.title;
        }
        else
        {
            posts.list.push(msg.data);
        }

        $scope.$digest();
    });

});