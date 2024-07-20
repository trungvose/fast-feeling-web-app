class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def detail
    sleep(2)
    @playlist = Playlist.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render plain: 'Playlist not found', status: 404
  end
end
