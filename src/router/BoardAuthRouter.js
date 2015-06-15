var BoardAuthDao = require(_path.src + "/dao/BoardAuthDao.js");
var BoardAuthVo = require(_path.src + '/vo/BoardAuthVo.js');

module.exports.getBoardAuthList =
{
	type : 'post',
	path : '/boardAuth/getBoardAuthList.do',
	callback : function(req, res)
	{
		BoardAuthDao.getBoardAuthList(req.body.boardId, function(response)
		{
			res.end(JSON.stringify({code : _code.SUCCESS, data : response, msg : "SUCCESS"}));
		});
	}
};

module.exports.updateBoardAuth =
{
	type : 'post',
	path : '/boardAuth/updateBoardAuth.do',
	callback : function(req, res)
	{
		var boardAuthVo = new BoardAuthVo(req.body);
		BoardAuthDao.getBoardAuth(boardAuthVo.boardId, function(response)
		{
			if(boardAuthVo.viewListLevel == null || boardAuthVo.viewListLevel == "")
				boardAuthVo.viewListLevel = -9999;
			if(boardAuthVo.viewDetailLevel == null || boardAuthVo.viewDetailLevel == "")
				boardAuthVo.viewDetailLevel = -9999;
			if(boardAuthVo.writeLevel == null || boardAuthVo.writeLevel == "")
				boardAuthVo.writeLevel = -9999;
			if(boardAuthVo.writeCommentLevel == null || boardAuthVo.writeCommentLevel == "")
				boardAuthVo.writeCommentLevel = -9999;
			
			if(response)
			{
				BoardAuthDao.updateBoardAuth(boardAuthVo, function()
				{
					res.end(JSON.stringify({code : _code.SUCCESS, data : _code.SUCCESS, msg : "SUCCESS"}));
				});
			}
			else
			{
				BoardAuthDao.insertBoardAuth(boardAuthVo, function()
				{
					res.end(JSON.stringify({code : _code.SUCCESS, data : _code.SUCCESS, msg : "SUCCESS"}));
				});
			}
		});
	}
};

module.exports.deleteBoard =
{
	type : 'post',
	path : '/boardAuth/deleteBoardAuth.do',
	callback : function(req, res)
	{
		var param = req.body;
		BoardAuthDao.deleteBoardAuth(param.boardId, function(response)
		{
			res.end(JSON.stringify({code : _code.SUCCESS, data : _code.SUCCESS, msg : "SUCCESS"}));
		});
	}
};